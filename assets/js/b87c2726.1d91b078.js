"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6593],{4137:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(a),c=l,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,p(p({ref:e},d),{},{components:a})):n.createElement(k,p({ref:e},d))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[u]="string"==typeof t?t:l,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8903:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),l=(a(7294),a(4137));const r={sidebar_label:"yt-dlp - \u0443\u0442\u0438\u043b\u0438\u0442\u0430",author:"Stavis",date:"2022-12-24",title:"yt-dlp \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",description:"yt-dlp \u043a\u0430\u043a \u043a\u0430\u0447\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u0432\u0438\u0434\u0435\u043e \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430",tags:["yt-dlp","youtube-dl"],image:"yt-dlp-header.webp"},p=void 0,i={unversionedId:"manuals/yt-dlp/readme",id:"manuals/yt-dlp/readme",title:"yt-dlp \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",description:"yt-dlp \u043a\u0430\u043a \u043a\u0430\u0447\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u0432\u0438\u0434\u0435\u043e \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430",source:"@site/docs/manuals/yt-dlp/readme.md",sourceDirName:"manuals/yt-dlp",slug:"/manuals/yt-dlp/",permalink:"/manuals/yt-dlp/",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/yt-dlp/readme.md",tags:[{label:"yt-dlp",permalink:"/tags/yt-dlp"},{label:"youtube-dl",permalink:"/tags/youtube-dl"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1698709722,formattedLastUpdatedAt:"30 \u043e\u043a\u0442. 2023 \u0433.",frontMatter:{sidebar_label:"yt-dlp - \u0443\u0442\u0438\u043b\u0438\u0442\u0430",author:"Stavis",date:"2022-12-24",title:"yt-dlp \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",description:"yt-dlp \u043a\u0430\u043a \u043a\u0430\u0447\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u0432\u0438\u0434\u0435\u043e \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430",tags:["yt-dlp","youtube-dl"],image:"yt-dlp-header.webp"},sidebar:"manualsSidebar",previous:{title:"wireguard - vpn \u0442\u0443\u043d\u0435\u043b\u044c",permalink:"/manuals/wireguard"}},o={},s=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"options",level:2},{value:"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0432\u0438\u0434\u0435\u043e",id:"\u0444\u043e\u0440\u043c\u0430\u0442\u044b-\u0432\u0438\u0434\u0435\u043e",level:3},{value:"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e",id:"\u043e\u0434\u0438\u043d\u043e\u0447\u043d\u043e\u0435-\u0432\u0438\u0434\u0435\u043e",level:2},{value:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b",id:"\u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b",level:2},{value:"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0430\u0443\u0434\u0438\u043e",id:"\u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435-\u0430\u0443\u0434\u0438\u043e",level:2},{value:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430",id:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",level:2},{value:"C\u0443\u0431\u0442\u0438\u0442\u0440\u044b",id:"c\u0443\u0431\u0442\u0438\u0442\u0440\u044b",level:2},{value:"\u0424\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u0444\u0430\u0439\u043b-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:2},{value:"links",id:"links",level:2}],d={toc:s},u="wrapper";function m(t){let{components:e,...r}=t;return(0,l.kt)(u,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"TDD Banner",src:a(7252).Z,width:"768",height:"384"})),(0,l.kt)("h2",{id:"options"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438: \u043a\u043b\u044e\u0447\u0435\u0439. \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0432 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp#general-options"},"\u0440\u0435\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438"),". "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Short"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--skip-download")),(0,l.kt)("td",{parentName:"tr",align:null},"`"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u0431\u043e\u0440\u0430 \u043a\u043b\u044e\u0447\u0435\u0439.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--list-formats")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-F")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 \u043c\u0435\u0434\u0438\u0430 \u0444\u0430\u043b\u043e\u0432.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--format")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0440\u043e\u043b\u0438\u043a\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--write-link")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a")))),(0,l.kt)("p",null,"\u0421\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0441\u0430\u0439\u0442\u043e\u0432 \u0438\u0441\u043a\u0430\u0442\u044c \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"m3u8"),"."),(0,l.kt)("h3",{id:"\u0444\u043e\u0440\u043c\u0430\u0442\u044b-\u0432\u0438\u0434\u0435\u043e"},"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0432\u0438\u0434\u0435\u043e"),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u043c\u0435\u0434\u0438\u0430 \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u043b\u044e\u0447\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"--format"),"."),(0,l.kt)("p",null,"\u041a\u0430\u043a \u044f \u043f\u043e\u043d\u044f\u043b, \u0441\u0430\u043c\u044b\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u044d\u0442\u043e ",(0,l.kt)("strong",{parentName:"p"},"mp4"),". \u0422\u0430\u043a \u043a\u0430\u043a \u043e\u043d \u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f\n\u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u043f\u043b\u0435\u0435\u0440\u043e\u0432. "),(0,l.kt)("p",null,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043b\u0443\u0447\u0448\u0438\u0439 ",(0,l.kt)("strong",{parentName:"p"},"mp4")," \u0444\u043e\u0440\u043c\u0430\u0442."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-f 22/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435 \u0445\u043e\u0440\u043e\u0448 \u0444\u043e\u0440\u043c\u0430\u0442 ",(0,l.kt)("strong",{parentName:"p"},"webm"),", \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0438\u043b\u044c\u043d\u043e \u0441\u0436\u0438\u043c\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b. \u041f\u0440\u0430\u0432\u0434\u0430 \u0441\u0430\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0447\u0443\u0442\u044c \u043c\u0435\u043d\u0435\u0435 \u043f\u043e\u043d\u044f\u0442\u0435\u043d \u0434\u043b\u044f\n\u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041f\u043e\u043a\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0432\u0438\u0434\u0435\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"webm")," \u0443\u043f\u0430\u043a\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"mp4")," \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-f bestvideo[height<=720]+bestaudio[ext=webm] --merge-output-format mp4\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp#format-selection-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 \u0432\u0438\u0434\u0435\u043e \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438.")),(0,l.kt)("p",null,"\u0410 \u0442\u0430\u043a \u0436\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0438 \u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"youtube")," \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0432\u0438\u0434\u0435\u043e\u0440\u043e\u043b\u0438\u043a\u0430. \u0414\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u0438 \u0435\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f."),(0,l.kt)("h2",{id:"\u043e\u0434\u0438\u043d\u043e\u0447\u043d\u043e\u0435-\u0432\u0438\u0434\u0435\u043e"},"\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"film='link'\nyt-dlp -o '%(title)s.%(ext)s' --format \"bestvideo+bestaudio[ext=m4a]/bestvideo+bestaudio/best\" --merge-output-format mp4 $film\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u043c\u0430\u0448\u0435\u0439 \u0438 \u043c\u0435\u0434\u0432\u0435\u0434\u0435\u043c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp -o '%(title)s.%(ext)s' --yes-playlist https://youtube.com/playlist?list=PLXnIohISHNIur5SkRfvOLo1YJjw7NwQx6\n")),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e."),(0,l.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u0438\u0434\u0435\u043e\u0440\u043e\u043b\u0438\u043a\u043e\u0432 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0432 \u0444\u0430\u0439\u043b\u0435"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp -f best -a list.txt\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp -ct --simulate --batch-file='/path/to/batch-file.txt'\n")),(0,l.kt)("h2",{id:"\u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b"},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b"),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u043e\u0432, \u0441 youtube \u0432\u043e \u0432\u0441\u044f\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435. \u0418 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043d\u0435\u0433\u043e \u043d\u0430\u0447\u043d\u0435\u0442 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0440\u043e\u043b\u0438\u043a\u0438."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430, \u0438\u043d\u043e\u0433\u0434\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0442\u044c \u0442\u0430\u043a \u0436\u0435 \u0438 \u043d\u043e\u043c\u0435\u0440 \u0440\u043e\u043b\u0438\u043a\u0430.",(0,l.kt)("br",{parentName:"p"}),"\n","\u0414\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-o '%(playlist_index)s.%(title)s.%(ext)s'\n")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u0435\u0437\u043d\u0430\u044f \u043e\u043f\u0446\u0438\u044f \u043f\u0440\u0438 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0438 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u043e\u0432\n\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u0438 \u043a\u043e\u043d\u0446\u0430 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430, \u0438\u043b\u0438 \u0448\u0430\u0433 \u0434\u043b\u044f \u0441\u043a\u0430\u0447\u043a\u0438. \u041e\u043f\u0446\u0438\u044f \u043f\u043e\u0445\u043e\u0436\u0430 \u043d\u0430 \u0441\u043b\u0430\u0439\u0441\u044b \u0432 \u043f\u0438\u0442\u043e\u043d\u0435."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'-I, --playlist-items ITEM_SPEC  Comma separated playlist_index of the items\n                                to download. You can specify a range using\n                                "[START]:[STOP][:STEP]". For backward\n                                compatibility, START-STOP is also supported.\n                                Use negative indices to count from the right\n                                and negative STEP to download in reverse\n                                order. E.g. "-I 1:3,7,-5::2" used on a\n                                playlist of size 15 will download the items\n                                at index 1,2,3,7,11,13,15\n')),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441\u043e \u0441\u043b\u0430\u0439\u0441\u0430\u043c\u0438 \u043d\u0435 \u043f\u043e\u043d\u044f\u0442\u043d\u0430, \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u043e \u0441\u0442\u0430\u0440\u0438\u043d\u043a\u0435"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--playlist-start NUMBER          -I NUMBER:\n--playlist-end NUMBER            -I :NUMBER\n")),(0,l.kt)("h2",{id:"\u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435-\u0430\u0443\u0434\u0438\u043e"},"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0430\u0443\u0434\u0438\u043e"),(0,l.kt)("p",null,"\u0421 \u043a\u043e\u0434\u0435\u043a\u043e\u043c ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/VP9"},"Youtube VP9")," \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},".webm")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},".opus"),"."),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0432\u044b\u0439 \u0441\u043f\u043e\u0440\u043e\u0431 \u044d\u0442\u043e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442. \u0412\u044b\u0431\u0440\u0430\u0432 \u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"-F"),".",(0,l.kt)("br",{parentName:"p"}),"\n","\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c \u0430\u0443\u0434\u0438\u043e\u0441\u0442\u0440\u0438\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e\u0434 ",(0,l.kt)("inlineCode",{parentName:"p"},"ID 2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp -f 2 -o 'songname.%(ext)s'\n")),(0,l.kt)("p",null,"\u0412\u0442\u043e\u0440\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431, \u0434\u043e\u0432\u0435\u0440\u0438\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e. \u0412\u044b\u0431\u0440\u0430\u0432 \u043e\u043f\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"-x")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp -f 'ba' -x --audio-format mp3 https://www.youtube.com/watch?v=dQw4w9WgXcQ  -o '%(id)s.%(ext)s'\n")),(0,l.kt)("h2",{id:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430"},"\u041e\u0431\u043b\u043e\u0436\u043a\u0430"),(0,l.kt)("p",null,"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u0441\u0442\u0430\u0432\u043a\u0438.\n\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0444\u043b\u0430\u0433\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"--write-thumbnail"),"\n\u0414\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0438\u0441\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0448\u0430\u0431\u043b\u043e\u043d \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp --write-thumbnail --convert-thumbnails jpg \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'--write-thumbnail -o "thumbnail:%(title)s/folder.%(ext)s"\n')),(0,l.kt)("h2",{id:"c\u0443\u0431\u0442\u0438\u0442\u0440\u044b"},"C\u0443\u0431\u0442\u0438\u0442\u0440\u044b"),(0,l.kt)("p",null,"\u041e\u043f\u0446\u0438\u0438 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'--write-sub                      Write subtitle file\n--write-auto-sub                 Write automatic subtitle file (YouTube only)\n--all-subs                       Download all the available subtitles of the video\n--list-subs                      List all available subtitles for the video\n--sub-format FORMAT              Subtitle format, accepts formats preference, for example: "srt" or "ass/srt/best"\n--sub-lang LANGS                 Languages of the subtitles to download (optional) separated by commas, use IETF language tags like \'en,pt\'\n')),(0,l.kt)("p",null,"So for example, to list all subs for a video:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp --list-subs https://www.youtube.com/watch?v=Ye8mB6VsUHw\n")),(0,l.kt)("p",null,"To download all subs, but not the video:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp --all-subs --skip-download https://www.youtube.com/watch?v=Ye8mB6VsUHw\n")),(0,l.kt)("p",null,"If a video only has auto generated subtitles, then ",(0,l.kt)("inlineCode",{parentName:"p"},"--all-subs")," still won't download it, instead use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp --write-auto-sub --skip-download https://www.youtube.com/watch?v=Ye8mB6VsUHw\n")),(0,l.kt)("h2",{id:"\u0444\u0430\u0439\u043b-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"},"\u0424\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",(0,l.kt)("inlineCode",{parentName:"p"},"yt-dlp.conf")),(0,l.kt)("admonition",{title:"My tip",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"youtube")," \u0440\u043e\u043b\u0438\u043a\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 ",(0,l.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1VYZOzBjoacWr7s9Al-J932byqaylRunW"},"colab")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="yt-dlp.conf"',title:'"yt-dlp.conf"'},'\n# Lines starting with # are comments\n# Formats\n\n# Best "mp4"\n-f 22/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best\n\n# Templafe folder\n-P "./videos/"\n# Save all videos under YouTube directory in your home directory\n-o %(title)s/%(title)s.%(ext)s\n\n# Embed datas to video\n--embed-chapters \n--embed-thumbnail \n--add-metadata\n\n# Convert thumbnails to jpg\n--convert-thumbnails "jpg"\n\n# Save thumbnail with \'folder.jpg\' name\n--write-thumbnail -o "thumbnail:%(title)s/folder.%(ext)s"\n\n# links\n# - [yt-dlp - \u0440\u0435\u043f\u0430](https://github.com/yt-dlp/yt-dlp)\n# - [yt-dlp - \u043e\u043f\u0446\u0438\u0438](https://github.com/yt-dlp/yt-dlp#usage-and-options)\n# - [yt-dlp - \u043f\u0440\u0438\u043c\u0435\u0440\u044b](https://github.com/yt-dlp/yt-dlp#output-template-examples)\n')),(0,l.kt)("h2",{id:"links"},"links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/yt-dlp/yt-dlp"},"yt-dlp - \u0440\u0435\u043f\u0430")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/yt-dlp/yt-dlp#usage-and-options"},"yt-dlp - \u043e\u043f\u0446\u0438\u0438")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/yt-dlp/yt-dlp#output-template-examples"},"yt-dlp - \u043f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,l.kt)("li",{parentName:"ul"},"\u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/TheFrenchGhosty/TheFrenchGhostys-Ultimate-YouTube-DL-Scripts-Collection"},"\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432")," \u0434\u043b\u044f yt-dlp"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ankenyr/jellyfin-youtube-metadata-plugin"},"\u043f\u043b\u0430\u0433\u0438\u043d")," \u0434\u043b\u044f jellyfin")))}m.isMDXComponent=!0},7252:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/yt-dlp-header-f5d88ad94cd8f4c611875ecc3bbc8145.webp"}}]);