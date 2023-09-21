---
title: "sshfs - автомонтирование"
description: "Лайфхак надежного автоматического монтирования sshfs с проверкой"
authors: stavis
# image: https://d66cvws976y93.cloudfront.net/media/uploads/zinnia/2016/11/21/first_step.jpg
tags: ["sshfs", "DevOps", "bashdays", "linux"]

---

> Интересный [пост](https://t.me/bashdays/41) с телеграм канала `BASH DAYS | LINUX` - [@bashdays](https://t.me/bashdays). Чтобы не забыть, выкладываю тут, все со слов автора.

Как-то года 3 назад мы настолько устали каждую неделю ремонтировать маунтшары через glusterfs, что было принято решение выкинуть его нахуй и пойти в сторону упрощения. Много что попробовали, но остановились на sshfs.

<!--truncate-->

## Автоматическое монтирование SSHFS

`GlusterFS` — это распределённая, параллельная, линейно масштабируемая файловая система с возможностью защиты от сбоев. НУ-НУ 😠

`SSHFS` — это клиентская программа для `Linux`, используемая для удаленного управления файлами по протоколу SSH таким образом, как будто они находятся на локальном компьютере.

## Проблема

По вводным: у нас есть `baremetal` сервер с огромными HDD дисками на овер 500 терабайт. На диске хранится статика, которую отдаем через `nginx`. Задача: подключать этот диск в облачную инфраструктуру к различным нодам.  
Условия: чтобы работало и не воняло. 🤒

Тут все достаточно просто. Даем команду на нужной нам ноде и шара монтируется в папку `/mnt/storage`:

```bash
sshfs -o compression=no,allow_other,reconnect storage@bashdayz.ru:/storage /mnt/storage
```

- `compression` - не использовать компрессию
- `allow_other` - разрешить доступ к шаре 
- `reconnect` - нативный реконект если шара отвалилась 

Из плюсов: на `baremetal` сервере не надо устанавливать никакой дополнительный софт, все работает по протоколу `ssh`.

Но есть нюансы. Допустим если ноду перезагрузить, то всё отвалится. Либо придут сетевые ножницы и оно тоже отвалится. 

Запихать в `fstab` не вариант. Так как на этапе маунта еще нет сети и загрузка сервера просто остановится в попытках примонтировать шару. А ключик `reconnect` работает как ему захочется, даже если выставить таймауты проверок.

## Решение

Решение простое, создаем три юнита в `systemd`.

### Юнит 1

```bash title="/etc/systemd/system/mnt-storage.mount"
[Unit]
Description=Mount remote filesystem over sshfs with fuse
After=network.target

[Install]
WantedBy=multi-user.target

[Mount]
What=storage@bashdayz.ru:/storage
Where=/mnt/storage
Type=fuse.sshfs
Options=kernel_cache,compression=no,allow_other,reconnect
```

- `After=network.target` - запускать маунт только после того, как на хосте поднимется сеть
- `What=storage@bashdayz.ru:/storage` - что монтируем
- `Where=/mnt/storage` - куда монтируем

:::info Важно!

Файл юнита должен называться в соответствии с путем куда монтируем. Узнать имя можно командой:

```bash
systemd-escape -p /mnt/storage
```

:::

Первый юнит сохраняем сюда: `/etc/systemd/system/mnt-storage.mount`

```bash
sudo vim /etc/systemd/system/mnt-storage.mount
```

Теперь нужно сделать юнит проверки, если шара отвалилась. Для начала создаем юнит с таймером:

### Юнит 2

```bash title="/etc/systemd/system/mnt-storage.timer"
[Unit]
Description=Run ssh mount /mnt/storage check
After=mnt-storage.mount

[Timer]
Unit=mnt-storage.service
OnCalendar=*-*-* *:*:00

[Install]
WantedBy=timers.target
```

- `After=mnt-storage.mount` - обеспечит запуск таймера после загрузки сервера, но только после того, как маунт юнит будет запущен, то есть после того, как удалённая ФС смонтируется.  
- `Unit=mnt-storage.service` - какой юнит будем запускать при срабатывании таймера. О нём чуть ниже.  
- `OnCalendar=*-*-* *:*:00` - это означает каждую минуту.

Юнит-файл таймера можно называть как угодно. Но чтобы было понятнее, будем называть также, как и маунт-юнит. Итак, сохраняем в `/etc/systemd/system/mnt-storage.timer`

```bash
sudo vim /etc/systemd/system/mnt-storage.timer
```

Теперь нужно создать юнит, который будет заниматься проверкой маунта и его перезапуском при необходимости:

### Юнит 3

```bash title="/etc/systemd/system/mnt-storage.service"
[Unit]
Description=SSH mount /mnt/storage check

[Service]
Type=oneshot
ExecStart=/bin/bash -c "if [[ ! -f /mnt/storage/mount.yes ]] ;then systemctl restart mnt-storage.mount;fi"

TimeoutSec=300

[Install]
WantedBy=multi-user.target 
```

Здесь всё просто. Bash строка в `ExecStart` это bash’евый однострочник,
проверяющий наличие маркерного файла `mount.yes`, при отсутствии которого будет перезапущен маунт-юнит.  
В более новой версии `systemd` можно было бы это всё сделать иначе, но зато такой вариант более универсален.

Cохраняем в `/etc/systemd/system/mnt-storage.service`

```bash
sudo vim /etc/systemd/system/mnt-storage.service
```

### Активация

Релодим и активируем:

```bash
systemctl daemon-reload
systemctl enable mnt-storage.mount
systemctl enable mnt-storage.timer
```

Третий юнит `mnt-storage.service` при загрузке сервера активировать не нужно, поскольку этот юнит вызывается таймером `mnt-storage.timer`.  
Он будет всегда `Active: inactive (dead)`, это нормально.

Ну и в финале запускаем таймер:

```bash
systemctl start mnt-storage.timer
```

## Итог

Вот и все! Наша шара успешно взята под контроль, подключена. А в случае отвала по любым причинам, она сама перемонтируется без лишних вопросов. Ну и после перезагрузки ноды, тоже все поднимется из коробки.

Способ рабочий, полет стабильный более трёх лет. Можешь приспособить к своим каким-то изобретениям и использовать уже юниты, а не закроненные `bash` скрипты. А шары монтировать через `sshfs`, а не через вонючий, разваливающийся `gluster`. Фак еее! 🐄

> Подпишись: [@bashdays](https://t.me/bashdays)

## Дополнительно

Посмотреть подключенные машины по `sshfs`

```bash
cat /etc/mtab
```

или в современных системах 2020г и выше - использовать утилиту  `findmnt`

```bash
findmnt -t fuse.sshfs
```

В ручную отмонтировать диск

```bash
fusermount -u /temp/user/harddrive
```

## Ссылки

- оригинальный [пост](https://t.me/bashdays/41)
- [юниты](https://telegra.ph/YUnity-montirovaniya-sshfs-07-26) в телеграф