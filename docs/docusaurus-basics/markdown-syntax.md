---
title: Markdown синтаксис
description: Синтаксис markdown, как фаорматировать маркдаун файлы

---

# Markdown синтаксис

## Ссылки

Простые ссылки делаются обычным образом


```md
[Duck Duck Go](https://duckduckgo.com "The best search engine for privacy")
```

Где текст в:

 - `[Duck Duck Go]` - Текст ссылки
 - `(https://duckduckgo.com)` - URL
 - `"The best search engine for privacy"` - Title - Необязательный параметр

В принципе это понятный синтаксис, больший интерес и мое постоянное забывания вызывает референс-ссылки

### Референс ссылки

Ссылки в референс стиле - это особый вид ссылок, которые упрощают отображение и чтение URL-адресов в Markdown. 
Очень удобно использовать для структурирования и в случае если в тексте делаются несколько ссылко на один рессурс в разных
частях текста.

Ссылки в референс стиле состоят из двух частей: 

1. видимой части, которую вы размещаете рядом с вашим текстом,
2. и скрытой части, которую вы сохраняете где-то еще в файле, чтобы текст было легко читать.

#### Видимая часть ссылки

```md
[hobbit-hole][1]
```

#### Скрытая часть ссылки

Скрытая часть ссылки обычно не отображается в тексте.
Вариантов ее испольнения может быть множество. Вот некоторые:

```md
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'
[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
```

## Изображения

Чтобы добавить изображение, добавьте восклицательный знак (`!`),
за которым следует текст alt в квадратных скобках, а также путь или URL-адрес к ресурсу изображения в круглых скобках.
При желании вы можете добавить заголовок в кавычках после пути или URL-адреса.

```markdown
![Пустой плейсхолдер](http://placehold.it/180x135/2ecc71/ecf0f1 "Зеленый плейсхолдер")
```

Отрисованный результат выглядит следующим образом:

![Пустой плейсхолдер](http://placehold.it/180x135/2ecc71/ecf0f1 "Зеленый плейсхолдер")

### Ссылки в изображениях

Чтобы добавить ссылку на изображение, заключите код для изображения в квадратные скобки, а затем добавьте ссылку в круглых скобках.

```
[![Пустой плейсхолдер](http://placehold.it/180x135/2ecc71/ecf0f1 "Зеленый плейсхолдер")](https://github.com/)
```

Отрисованный результат выглядит следующим образом:

[![Пустой плейсхолдер](http://placehold.it/180x135/2ecc71/ecf0f1 "Зеленый плейсхолдер")](https://github.com/)

### Размер изображения

Синтаксис Markdown для изображений не позволяет вам указывать ширину и высоту изображений. Если вам нужно изменить размер изображения, а ваш процессор Markdown поддерживает HTML, вы можете использовать HTML-тег img с атрибутами width и height, чтобы задать размеры изображения в пикселях.

```html
<img src="image.png" ширина="200" высота="100">
```

Отрисованный результат будет содержать изображение, измененное в соответствии с указанными вами размерами.

### Подписи к изображениям

Markdown изначально не поддерживает подписи к изображениям, но есть два возможных обходных пути. Е
сли ваше приложение Markdown поддерживает HTML, вы можете использовать HTML-теги figure и figcaption, чтобы добавить подпись к вашему изображению.

```html
<figure>
    <img src="http://placehold.it/180x135/2ecc71/ecf0f1"
         alt="Пустой плейсхолдер">
    <figcaption>Это просто зеленый плейсхолдер</figcaption>
</figure>
```

Если ваше приложение Markdown не поддерживает HTML,
вы можете после изображения добавить 2 пробела, тем самым сымитировав `<br>`.
И разместить подпись непосредственно под ним использовав выделение.

```markdown
![Пустой плейсхолдер](http://placehold.it/180x135/2ecc71/ecf0f1 "Зеленый плейсхолдер")  
*Подпись к зеленому плейсхолдеру*
```
Результат выглядит следующим образом:

![Пустой плейсхолдер](http://placehold.it/180x135/2ecc71/ecf0f1 "Зеленый плейсхолдер")  
*Подпись к зеленому плейсхолдеру*


## Ссылки

- [Синтаксис markdown](https://www.markdownguide.org/basic-syntax)