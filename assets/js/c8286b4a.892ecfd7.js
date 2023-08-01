"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4387],{4137:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>k});var o=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,l=function(n,e){if(null==n)return{};var t,o,l={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var s=o.createContext({}),p=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,s=n.parentName,m=a(n,["components","mdxType","originalType","parentName"]),c=p(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return t?o.createElement(k,i(i({ref:e},m),{},{components:t})):o.createElement(k,i({ref:e},m))}));function k(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,i=new Array(r);i[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a[c]="string"==typeof n?n:l,i[1]=a;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},987:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(7462),l=(t(7294),t(4137));const r={sidebar_label:"x_comprehensions",title:"List comprehensions | dict comprehensions | set comprehensions",author:"stavis",description:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u043e\u0432, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 List comprehensions \u0432 \u041f\u0438\u0442\u043e\u043d\u0435",tags:["python","programing","iterators","comprehensions"]},i="List, dict, set comprehensions",a={unversionedId:"python/functions/x_comprehensions",id:"python/functions/x_comprehensions",title:"List comprehensions | dict comprehensions | set comprehensions",description:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u043e\u0432, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 List comprehensions \u0432 \u041f\u0438\u0442\u043e\u043d\u0435",source:"@site/docs/python/functions/x_comprehensions.md",sourceDirName:"python/functions",slug:"/python/functions/x_comprehensions",permalink:"/python/functions/x_comprehensions",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/python/functions/x_comprehensions.md",tags:[{label:"python",permalink:"/tags/python"},{label:"programing",permalink:"/tags/programing"},{label:"iterators",permalink:"/tags/iterators"},{label:"comprehensions",permalink:"/tags/comprehensions"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1690909730,formattedLastUpdatedAt:"1 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{sidebar_label:"x_comprehensions",title:"List comprehensions | dict comprehensions | set comprehensions",author:"stavis",description:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u043e\u0432, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 List comprehensions \u0432 \u041f\u0438\u0442\u043e\u043d\u0435",tags:["python","programing","iterators","comprehensions"]},sidebar:"tutorialSidebar",previous:{title:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f sorted()",permalink:"/python/functions/python-sorted"},next:{title:"\u0412\u0441\u0435 \u043f\u0440\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b",permalink:"/python/algorithms/"}},s={},p=[{value:"List comprehensions (\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u043e\u0432)",id:"list-comprehensions-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u0441\u043f\u0438\u0441\u043a\u043e\u0432",level:2},{value:"Dict comprehensions (\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439)",id:"dict-comprehensions-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439",level:2},{value:"Set comprehensions (\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432)",id:"set-comprehensions-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432",level:2}],m={toc:p},c="wrapper";function u(n){let{components:e,...t}=n;return(0,l.kt)(c,(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"list-dict-set-comprehensions"},"List, dict, set comprehensions"),(0,l.kt)("p",null,"Python \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e\n\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043a\u0438, \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u0438 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430."),(0,l.kt)("p",null,"\u041d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044d\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List comprehensions"),(0,l.kt)("li",{parentName:"ul"},"Dict comprehensions"),(0,l.kt)("li",{parentName:"ul"},"Set comprehensions")),(0,l.kt)("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0437\u0432\u0443\u0447\u0438\u0442 \u043a\u0430\u043a ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BA%D0%BE%D0%B2%D0%BE%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u044f\n\u0441\u043f\u0438\u0441\u043a\u043e\u0432 \u0438\u043b\u0438 \u0441\u043f\u0438\u0441\u043a\u043e\u0432\u043e\u0435\n\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),"\n\u0447\u0442\u043e \u043d\u0435 \u043e\u0441\u043e\u0431\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u044c \u0441\u0443\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u0430."),(0,l.kt)("p",null,'\u0412 \u043a\u043d\u0438\u0433\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434 "\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u043f\u0438\u0441\u043a\u0430", \u0447\u0442\u043e, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0442\u043e\u0436\u0435\n\u043d\u0435 \u0441\u0430\u043c\u044b\u0439 \u0443\u0434\u0430\u0447\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 Python \u0435\u0441\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043d\u044f\u0442\u0438\u0435\n\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043d\u043e \u043e\u043d \u043b\u0443\u0447\u0448\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0443\u0442\u044c\n\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f.'),(0,l.kt)("p",null,"\u042d\u0442\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0431\u043e\u043b\u0435\u0435 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c\n\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043d\u043e \u0438 \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u0438\u0445 \u0431\u044b\u0441\u0442\u0440\u0435\u0435. \u0418 \u0445\u043e\u0442\u044f \u043f\u043e\u043d\u0430\u0447\u0430\u043b\u0443 \u043e\u043d\u0438\n\u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u043e\u043d\u0438 \u043e\u0447\u0435\u043d\u044c \u0447\u0430\u0441\u0442\u043e\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f."),(0,l.kt)("h2",{id:"list-comprehensions-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u0441\u043f\u0438\u0441\u043a\u043e\u0432"},"List comprehensions (\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u043e\u0432)"),(0,l.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u043f\u0438\u0441\u043a\u0430 (list comprehensions \u0438\u043b\u0438 list comp) - \u044d\u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0438\u0434\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"vlans = [int(vl) for vl in items]\n")),(0,l.kt)("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a items:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'\nitems = ["10", "20", "30", "1", "11", "100"]\n\n')),(0,l.kt)("p",null,"\u0412 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435, list comprehension \u044d\u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\n\u0438\u0442\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a. \u0422\u043e \u0435\u0441\u0442\u044c, \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\n\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a."),(0,l.kt)("p",null,"List comp \u0432\u044b\u0448\u0435 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u0435\u043d \u0442\u0430\u043a\u043e\u0439 \u0446\u0438\u043a\u043b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'items = ["10", "20", "30", "1", "11", "100"]\n\nvlans = []\n  for vl in items:\n      vlans.append(int(vl))\n\nprint(vlans)\n# [10, 20, 30, 1, 11, 100]\n')),(0,l.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u044b\u0447\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0430:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/pyneng-book/master/images/08_list_comp.png",alt:"image"})),(0,l.kt)("p",null,"\u0412 list comprehensions \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 if. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c\n\u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0430\u043a\u043e\u0439 \u0446\u0438\u043a\u043b \u043e\u0442\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u0430\u043c\u0438,\n\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0438\u0445 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a only_digits:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"items = ['10', '20', 'a', '30', 'b', '40']\n\nonly_digits = []\n\nfor item in items:\n    if item.isdigit():\n        only_digits.append(int(item))\n\nprint(only_digits)\n# [10, 20, 30, 40]\n")),(0,l.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0432 \u0432\u0438\u0434\u0435 list comprehensions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"items = ['10', '20', 'a', '30', 'b', '40']\nonly_digits = [int(item) for item in items if item.isdigit()]\n\nprint(only_digits)\n# [10, 20, 30, 40]\n")),(0,l.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0446\u0438\u043a\u043b\u043e\u043c \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0430 \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/pyneng-book/master/images/08_list_comp_if.png",alt:"image"})),(0,l.kt)("p",null,"\u041a\u043e\u043d\u0435\u0447\u043d\u043e, \u0434\u0430\u043b\u0435\u043a\u043e \u043d\u0435 \u0432\u0441\u0435 \u0446\u0438\u043a\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u0430\u043a \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u043f\u0438\u0441\u043a\u0430, \u043d\u043e\n\u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0443\u0441\u043b\u043e\u0436\u043d\u044f\u0435\u0442\u0441\u044f, \u043b\u0443\u0447\u0448\u0435\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u0430."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u0412 Python \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0433\u0443\u0442 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 filter \u0438 map\n\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f.")),(0,l.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0438\u0437 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445\n\u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    london_co = {\n        'r1' : {\n        'hostname': 'london_r1',\n        'location': '21 New Globe Walk',\n        'vendor': 'Cisco',\n        'model': '4451',\n        'ios': '15.4',\n        'ip': '10.255.0.1'\n        },\n        'r2' : {\n        'hostname': 'london_r2',\n        'location': '21 New Globe Walk',\n        'vendor': 'Cisco',\n        'model': '4451',\n        'ios': '15.4',\n        'ip': '10.255.0.2'\n        },\n        'sw1' : {\n        'hostname': 'london_sw1',\n        'location': '21 New Globe Walk',\n        'vendor': 'Cisco',\n        'model': '3850',\n        'ios': '3.6.XE',\n        'ip': '10.255.0.101'\n        }\n    }\n\n    In [14]: [london_co[device]['ios'] for device in london_co]\n    Out[14]: ['15.4', '15.4', '3.6.XE']\n\n    In [15]: [london_co[device]['ip'] for device in london_co]\n    Out[15]: ['10.255.0.1', '10.255.0.2', '10.255.0.101']\n")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"[expression for item1 in iterable1 if condition1\n            for item2 in iterable2 if condition2\n            ...\n            for itemN in iterableN if conditionN ]\n")),(0,l.kt)("p",null,"\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e for \u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 vlans \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0441\u043f\u0438\u0441\u043a\u043e\u0432 \u0441\nVLAN'\u0430\u043c\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nvlans = [[10, 21, 35], [101, 115, 150], [111, 40, 50]]\n\n")),(0,l.kt)("p",null,"\u0418\u0437 \u044d\u0442\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0430\u0434\u043e \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u043f\u043b\u043e\u0441\u043a\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438 VLAN.\n\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u2014 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0446\u0438\u043a\u043b\u043e\u0432 for:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"result = []\n\nfor vlan_list in vlans:\n    for vlan in vlan_list:\n        result.append(vlan)\n\n\nprint(result)\n# [10, 21, 35, 101, 115, 150, 111, 40, 50]\n")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043b\u043e\u0441\u043a\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"vlans = [[10, 21, 35], [101, 115, 150], [111, 40, 50]]\nresult = [vlan for vlan_list in vlans for vlan in vlan_list]\n\nprint(result)\n# [10, 21, 35, 101, 115, 150, 111, 40, 50]\n")),(0,l.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0446\u0438\u043a\u043b\u0430\u043c\u0438 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0430 \u0441 \u0434\u0432\u0443\u043c\u044f \u0446\u0438\u043a\u043b\u0430\u043c\u0438:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/natenka/pyneng-book/master/images/08_list_comp_for_for.png",alt:"image"})),(0,l.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u0434\u0432\u0443\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f\n",(0,l.kt)("inlineCode",{parentName:"p"},"zip"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    vlans = [100, 110, 150, 200]\n    names = ['mngmt', 'voice', 'video', 'dmz']\n\n    result = ['vlan {}\\n name {}'.format(vlan, name) for vlan, name in zip(vlans, names)]\n\n    In [26]: print('\\n'.join(result))\n    vlan 100\n     name mngmt\n    vlan 110\n     name voice\n    vlan 150\n     name video\n    vlan 200\n     name dmz\n")),(0,l.kt)("h2",{id:"dict-comprehensions-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439"},"Dict comprehensions (\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439)"),(0,l.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c \u0441\u043f\u0438\u0441\u043a\u043e\u0432, \u043d\u043e \u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f\n\u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0430\u043a\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"d = {}\n\nfor num in range(1, 11):\n    d[num] = num**2\n\nprint(d)\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}\n")),(0,l.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"d = {num: num**2 for num in range(1, 11)}\n\nprint(d)\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81, 10: 100}\n")),(0,l.kt)("p",null,"\u0415\u0449\u0435 \u043e\u0434\u0438\u043d \u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0434\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0441\u043b\u043e\u0432\u0430\u0440\u044c \u0438\n\u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043a\u043b\u044e\u0447\u0438 \u0432 \u043d\u0438\u0436\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440. \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430, \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0431\u0435\u0437\n\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    r1 = {'ios': '15.4',\n          'ip': '10.255.0.1',\n          'hostname': 'london_r1',\n          'location': '21 New Globe Walk',\n          'model': '4451',\n          'vendor': 'Cisco'}\n\n    lower_r1 = {}\n\n    for key, value in r1.items():\n        lower_r1[key.lower()] = value\n\n    In [35]: lower_r1\n    Out[35]:\n    {'hostname': 'london_r1',\n     'ios': '15.4',\n     'ip': '10.255.0.1',\n     'location': '21 New Globe Walk',\n     'model': '4451',\n     'vendor': 'Cisco'}\n")),(0,l.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u043e\u0432\u0430\u0440\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    r1 = {'ios': '15.4',\n      'ip': '10.255.0.1',\n      'hostname': 'london_r1',\n      'location': '21 New Globe Walk',\n      'model': '4451',\n      'vendor': 'Cisco'}\n\n    lower_r1 = {key.lower(): value for key, value in r1.items()}\n\n    In [38]: lower_r1\n    Out[38]:\n    {'hostname': 'london_r1',\n     'ios': '15.4',\n     'ip': '10.255.0.1',\n     'location': '21 New Globe Walk',\n     'model': '4451',\n     'vendor': 'Cisco'}\n")),(0,l.kt)("p",null,"\u041a\u0430\u043a \u0438 list comprehensions, dict comprehensions \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438.\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0438 \u0432\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    london_co = {\n        'r1' : {\n        'hostname': 'london_r1',\n        'location': '21 New Globe Walk',\n        'vendor': 'Cisco',\n        'model': '4451',\n        'ios': '15.4',\n        'ip': '10.255.0.1'\n        },\n        'r2' : {\n        'hostname': 'london_r2',\n        'location': '21 New Globe Walk',\n        'vendor': 'Cisco',\n        'model': '4451',\n        'ios': '15.4',\n        'ip': '10.255.0.2'\n        },\n        'sw1' : {\n        'hostname': 'london_sw1',\n        'location': '21 New Globe Walk',\n        'vendor': 'Cisco',\n        'model': '3850',\n        'ios': '3.6.XE',\n        'ip': '10.255.0.101'\n        }\n    }\n\n    lower_london_co = {}\n\n    for device, params in london_co.items():\n        lower_london_co[device] = {}\n        for key, value in params.items():\n            lower_london_co[device][key.lower()] = value\n\n    In [42]: lower_london_co\n    Out[42]:\n    {'r1': {'hostname': 'london_r1',\n      'ios': '15.4',\n      'ip': '10.255.0.1',\n      'location': '21 New Globe Walk',\n      'model': '4451',\n      'vendor': 'Cisco'},\n     'r2': {'hostname': 'london_r2',\n      'ios': '15.4',\n      'ip': '10.255.0.2',\n      'location': '21 New Globe Walk',\n      'model': '4451',\n      'vendor': 'Cisco'},\n     'sw1': {'hostname': 'london_sw1',\n      'ios': '3.6.XE',\n      'ip': '10.255.0.101',\n      'location': '21 New Globe Walk',\n      'model': '3850',\n      'vendor': 'Cisco'}}\n")),(0,l.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 dict comprehensions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    result = {device: {key.lower(): value for key, value in params.items()}\n              for device, params in london_co.items()}\n\n    In [44]: result\n    Out[44]:\n    {'r1': {'hostname': 'london_r1',\n      'ios': '15.4',\n      'ip': '10.255.0.1',\n      'location': '21 New Globe Walk',\n      'model': '4451',\n      'vendor': 'Cisco'},\n     'r2': {'hostname': 'london_r2',\n      'ios': '15.4',\n      'ip': '10.255.0.2',\n      'location': '21 New Globe Walk',\n      'model': '4451',\n      'vendor': 'Cisco'},\n     'sw1': {'hostname': 'london_sw1',\n      'ios': '3.6.XE',\n      'ip': '10.255.0.101',\n      'location': '21 New Globe Walk',\n      'model': '3850',\n      'vendor': 'Cisco'}}\n")),(0,l.kt)("h2",{id:"set-comprehensions-\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b-\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432"},"Set comprehensions (\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432)"),(0,l.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432 \u0432 \u0446\u0435\u043b\u043e\u043c \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c \u0441\u043f\u0438\u0441\u043a\u043e\u0432."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0430\u0434\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438 VLAN'\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    vlans = [10, '30', 30, 10, '56']\n\n    unique_vlans = {int(vlan) for vlan in vlans}\n\n    In [47]: unique_vlans\n    Out[47]: {10, 30, 56}\n")),(0,l.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f set comprehensions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n    vlans = [10, '30', 30, 10, '56']\n\n    unique_vlans = set()\n\n    for vlan in vlans:\n        unique_vlans.add(int(vlan))\n\n    In [51]: unique_vlans\n    Out[51]: {10, 30, 56}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"image:: https://raw.githubusercontent.com/natenka/pyneng-book/master/images/08_list_comp_if_dark.png\nimage:: https://raw.githubusercontent.com/natenka/pyneng-book/master/images/08_list_comp_dark.png\nimage:: https://raw.githubusercontent.com/natenka/pyneng-book/master/images/08_list_comp_for_for_dark.png\n")))}u.isMDXComponent=!0}}]);