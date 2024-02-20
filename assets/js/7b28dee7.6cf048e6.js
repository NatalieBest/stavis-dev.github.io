"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9976],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=i(n),k=a,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:a,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=n(7462),a=(n(7294),n(4137));const o={dtaft:!0,sidebar_label:"Docker \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430",author:"stavis",title:"Docker \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u0447\u0430\u0441\u0442\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c",description:"\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f docker, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u0438 \u043d\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u043e \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430\u043c",tags:["docker","linux","devops"]},l=void 0,d={unversionedId:"manuals/docker",id:"manuals/docker",title:"Docker \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u0447\u0430\u0441\u0442\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c",description:"\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f docker, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u0438 \u043d\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u043e \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430\u043c",source:"@site/docs/manuals/docker.md",sourceDirName:"manuals",slug:"/manuals/docker",permalink:"/manuals/docker",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/docker.md",tags:[{label:"docker",permalink:"/tags/docker"},{label:"linux",permalink:"/tags/linux"},{label:"devops",permalink:"/tags/devops"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1708432825,formattedLastUpdatedAt:"20 \u0444\u0435\u0432\u0440. 2024 \u0433.",frontMatter:{dtaft:!0,sidebar_label:"Docker \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430",author:"stavis",title:"Docker \u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u0447\u0430\u0441\u0442\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c",description:"\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f docker, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u0438 \u043d\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u043e \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430\u043c",tags:["docker","linux","devops"]},sidebar:"manualsSidebar",previous:{title:"bash - \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",permalink:"/manuals/bash-triks"},next:{title:"ffmpeg - \u0432\u0438\u0434\u0435\u043e-\u0444\u0430\u0431\u0440\u0438\u043a\u0430",permalink:"/manuals/ffmpeg"}},p={},i=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b Docker",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-docker",level:2},{value:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0435 \u0438\u043c\u0438\u0434\u0436\u0435\u0439",id:"\u0431\u044b\u0441\u0442\u0440\u043e\u0435-\u0443\u0434\u0430\u043b\u0435\u043d\u0435-\u0438\u043c\u0438\u0434\u0436\u0435\u0439",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439-\u0441\u0442\u0440\u043e\u043a\u0438",level:2},{value:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0433\u0430\u0439\u0434\u044b",id:"\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435-\u0433\u0430\u0439\u0434\u044b",level:2},{value:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043e\u0431\u0440\u0430\u0437\u044b",id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u043e\u0431\u0440\u0430\u0437\u044b",level:2},{value:"Docker-android",id:"docker-android",level:3},{value:"Docker-firefox",id:"docker-firefox",level:3},{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",level:2},{value:"\u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u0437 \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430.",id:"\u043d\u0435\u0442-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435-\u0441-\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c-\u0438\u0437-\u0434\u043e\u043a\u0435\u0440-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:3},{value:"\u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"\u0435\u0449\u0435-\u043e\u0434\u0438\u043d-\u043f\u0443\u0442\u044c-\u043a-\u0444\u0430\u0439\u043b\u0443-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",level:3},{value:"\u0421\u0442\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u0438",level:3}],s={toc:i},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/ubuntu/"},"\u0421\u0442\u0430\u0442\u044c\u044f")," \u0432 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update\n\nsudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n    \ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo apt-key fingerprint 0EBFCD88\n## step\nsudo apt install apt-transport-https ca-certificates curl software-properties-common\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic test"\nsudo apt update\nsudo apt install docker-ce\n\n# check\nsudo systemctl status docker\n# add user\nsudo usermod -aG docker $USER\n\n# install docker compose\n\nsudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n# https://github.com/docker/compose/releases/download/1.25.5/docker-compose-Linux-x86_64\n\nsudo chmod +x /usr/local/bin/docker-compose\n')),(0,a.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 docker \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043a\u0435\u0432 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\n")),(0,a.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-docker"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b Docker"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -d --name tg tgfin")," - \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0434\u043e\u043a\u0435\u0440 \u043e\u0431\u0440\u0430\u0437 \u0432 \u0444\u043e\u043d\u0435 (",(0,a.kt)("inlineCode",{parentName:"p"},"-d"),'), \u043d\u0430\u0437\u0432\u0430\u0442\u044c \u0435\u0433\u043e "',(0,a.kt)("inlineCode",{parentName:"p"},"tg"),'" \u0438 \u043e\u0431\u0440\u0430\u0437\u0430 ',(0,a.kt)("inlineCode",{parentName:"p"},"tgfin"),"\n\u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c (",(0,a.kt)("inlineCode",{parentName:"p"},"--rm"),"), \u0442\u043e\u0433\u0434\u0430 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438. \u041d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f."),(0,a.kt)("h3",{id:"\u0431\u044b\u0441\u0442\u0440\u043e\u0435-\u0443\u0434\u0430\u043b\u0435\u043d\u0435-\u0438\u043c\u0438\u0434\u0436\u0435\u0439"},"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0435 \u0438\u043c\u0438\u0434\u0436\u0435\u0439"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"docker images")," # \u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0438\u043c\u0438\u0434\u0436\u0438."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"docker images -q")," # \u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 ID \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0438\u043c\u0438\u0434\u0436\u0435\u0439."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"docker image rm")," # \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0438\u043c\u0438\u0434\u0436\u0438 (\u043e\u0431\u0440\u0430\u0437\u0430) \u043f\u043e \u0438\u0445 ID")),(0,a.kt)("p",null,"\u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b \u043f\u043e \u0438\u0445 ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm $(docker ps -a -q)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo service docker restart")," - \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0434\u043e\u043a\u0435\u0440."),(0,a.kt)("h2",{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439-\u0441\u0442\u0440\u043e\u043a\u0438"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--rm")," - \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043f\u043e\u0441\u043b\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 (docker stop)")),(0,a.kt)("h2",{id:"\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435-\u0433\u0430\u0439\u0434\u044b"},"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0433\u0430\u0439\u0434\u044b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://habr.com/ru/company/flant/blog/336654/"},"\u0421\u0442\u0430\u0442\u044c\u044f \u043d\u0430 \u0445\u0430\u0431\u0440\u0435")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=QF4ZF857m44&t=1688s&ab_channel=%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%9C%D0%B0%D1%82%D1%8F%D1%88%D0%BE%D0%B2"},"\u041e\u0441\u043d\u043e\u0432\u044b Docker. \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u044b\u043f\u0443\u0441\u043a"))),(0,a.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u043e\u0431\u0440\u0430\u0437\u044b"},"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043e\u0431\u0440\u0430\u0437\u044b"),(0,a.kt)("h3",{id:"docker-android"},"Docker-android"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/budtmo/docker-android",title:"Githud docker-android"},"\u042d\u043c\u0443\u043b\u044f\u0442\u043e\u0440 android \u0432 \u043e\u0431\u0440\u0430\u0437\u0435 \u0434\u043e\u043a\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n# \u0421 \u0430\u0432\u0442\u043e\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u043c \u043e\u0431\u0440\u0430\u0437\u0430 Samsung Galaxy S6\n# \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 orbot\ndocker run --privileged -d --rm -p 6080:6080 -p 5554:5554 -p 5555:5555 -p 7071:7071 -e DEVICE="Nexus 5" -v /home/wega/Downloads/android_download:/storage/emulated/0/Download --name android-torrent budtmo/docker-android-x86-9.0 \n')),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0437\u044b \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0437\u0430\u0434\u044f \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0434\u043e\u043a\u0435\u0440\u0430 \u043e\u0431\u044b\u0447\u043d\u043e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://172.17.0.1:6080/"},"http://172.17.0.1:6080/")),(0,a.kt)("h3",{id:"docker-firefox"},"Docker-firefox"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jlesage/docker-firefox",title:"Githud Docker-firefox"},"Docker-firefox")),(0,a.kt)("p",null,"\u0415\u0441\u0442\u044c \u0432\u0435\u0440\u0441\u0438\u044f \u0434\u043e\u043a\u0435\u0440\u0430 \u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c \u0424\u0430\u0435\u0440\u0444\u043e\u043a\u0441."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --rm --name firefox -e DISPLAY=$DISPLAY \\\n-v /tmp/.X11-unix:/tmp/.X11-unix kennethkl/firefox\n")),(0,a.kt)("h2",{id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),(0,a.kt)("h3",{id:"\u043d\u0435\u0442-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435-\u0441-\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c-\u0438\u0437-\u0434\u043e\u043a\u0435\u0440-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"},"\u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u0437 \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://odino.org/cannot-connect-to-the-internet-from-your-docker-containers/"},"\u0441\u0442\u0430\u0442\u044c\u044f")),(0,a.kt)("p",null,"2 \u043f\u0443\u0442\u0438 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls /etc/docker # Is there a file at the specified path daemon.json\ncd /etc/docker\nsudo touch daemon.json\n\nsudo vim /etc/docker/daemon.json\n")),(0,a.kt)("p",null,"\u0432 \u0444\u0430\u0439\u043b \u0432\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u043d\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "dns": ["192.168.1.1", "192.168.8.1", "8.8.8.8"]\n}\n')),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo service docker restart")),(0,a.kt)("p",null,"..."),(0,a.kt)("p",null,"\u041d\u043e \u043b\u0438\u0447\u043d\u043e \u0443 \u043c\u0435\u043d\u044f \u043d\u0438\u0447\u0435\u0433\u043e \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u0432\u044b\u0448\u043b\u043e."),(0,a.kt)("h3",{id:"\u0435\u0449\u0435-\u043e\u0434\u0438\u043d-\u043f\u0443\u0442\u044c-\u043a-\u0444\u0430\u0439\u043b\u0443-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},"\u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/laradock/laradock/issues/2047"},"From this site")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo vim /etc/default/docker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Docker Upstart and SysVinit configuration file\n\n# Use DOCKER_OPTS to modify the daemon startup options.\nDOCKER_OPTS="--dns 208.67.222.222 --dns 208.67.220.220\n')),(0,a.kt)("p",null,"\u0432 \u0444\u0430\u0439\u043b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c dns"),(0,a.kt)("h3",{id:"\u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u0438"},"\u0421\u0442\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u043d\u0430 \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u0445.\n\u041f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u0442\u043e ",(0,a.kt)("strong",{parentName:"p"},"\u0442\u043e\u043b\u044c\u043a\u043e")," \u0441 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u043c ",(0,a.kt)("strong",{parentName:"p"},"\u041c\u0422\u0421"),"."),(0,a.kt)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437 \u0437\u0430 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u041c\u0422\u0421 \u043e\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0439 TTL \u0434\u043e 1.\n\u0418 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0434\u044b, \u043d\u0435 \u0438\u0434\u0443\u0442 \u0434\u0430\u043b\u044c\u0448\u0435 \u0440\u043e\u0443\u0442\u0435\u0440\u0430.\n\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432 \u0434\u043e\u043a\u0435\u0440 ",(0,a.kt)("strong",{parentName:"p"},"bash")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker run -it --rm bash\n\n# \u0434\u0430\u043b\u0435\u0435 \u0432 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0435\n# \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u043a pypi.org\ntraceroute pypi.org\n\n# \u0432 \u043c\u043e\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0432\u043e\u0434 \u043d\u0435 \u0440\u0430\u0434\u0443\u0435\u0442...\n\n")),(0,a.kt)("p",null,"bash-5.0# traceroute pypi.org\ntraceroute to pypi.org (151.101.192.223), 30 hops max, 46 byte packets\n1  172.17.0.1 (172.17.0.1)  0.022 ms  0.027 ms  0.016 ms\n2  192.168.8.1 (192.168.8.1)  1.408 ms  1.443 ms  1.178 ms\n3  *  *  ",(0,a.kt)("em",{parentName:"p"},"\n4  "),"  *  ",(0,a.kt)("em",{parentName:"p"},"\n5  "),"  *  ",(0,a.kt)("em",{parentName:"p"},"\n6  "),"  *  *"),(0,a.kt)("p",null,"\u0447\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e ping \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442."))}u.isMDXComponent=!0}}]);