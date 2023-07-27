"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2494],{4137:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,s=u["".concat(o,".").concat(g)]||u[g]||d[g]||l;return n?a.createElement(s,p(p({ref:t},k),{},{components:n})):a.createElement(s,p({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(4137));const l={author:"Stavis",title:"\u0428\u0438\u0444\u0440\u0443\u0435\u043c \u0441 GPG",description:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 gpg",tags:["gpg","linux"]},p="GPG",i={unversionedId:"manuals/gpg",id:"manuals/gpg",title:"\u0428\u0438\u0444\u0440\u0443\u0435\u043c \u0441 GPG",description:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 gpg",source:"@site/docs/manuals/gpg.md",sourceDirName:"manuals",slug:"/manuals/gpg",permalink:"/manuals/gpg",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/gpg.md",tags:[{label:"gpg",permalink:"/tags/gpg"},{label:"linux",permalink:"/tags/linux"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1690484369,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{author:"Stavis",title:"\u0428\u0438\u0444\u0440\u0443\u0435\u043c \u0441 GPG",description:"\u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 gpg",tags:["gpg","linux"]},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0430\u043d\u0443\u0430\u043b\u044b \u043f\u043e \u0441\u043e\u0444\u0442\u0443",permalink:"/category/\u043c\u0430\u043d\u0443\u0430\u043b\u044b-\u043f\u043e-\u0441\u043e\u0444\u0442\u0443"},next:{title:"Linux command line",permalink:"/manuals/linux-command-line"}},o={},m=[{value:"\u0428\u0438\u0444\u0440\u043e\u0432\u043a\u0430 / \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430",id:"\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430--\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430",level:2},{value:"\u0417\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b",id:"\u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c-\u0444\u0430\u0439\u043b",level:3},{value:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430",id:"\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430",level:3},{value:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b",id:"\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c-\u0444\u0430\u0439\u043b",level:3},{value:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043b\u044e\u0447\u0435\u0439",id:"\u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c-\u0441\u043f\u0438\u0441\u043e\u043a-\u043a\u043b\u044e\u0447\u0435\u0439",level:3},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439",level:2},{value:"\u0418\u043c\u043f\u043e\u0440\u0442 / \u044d\u043a\u0441\u043f\u043e\u0440\u0442",id:"\u0438\u043c\u043f\u043e\u0440\u0442--\u044d\u043a\u0441\u043f\u043e\u0440\u0442",level:2},{value:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 / \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043b\u044e\u0447\u0435\u0439",id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435--\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043b\u044e\u0447\u0435\u0439",level:2},{value:"\u041f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043b\u044e\u0447\u0430",id:"\u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435-\u0441\u0440\u043e\u043a\u0430-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-\u043a\u043b\u044e\u0447\u0430",level:3},{value:"Config",id:"config",level:2},{value:"\u041f\u043e\u043b\u0435\u0437\u043d\u043e\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0438\u0432\u043e",id:"\u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0435-\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435-\u0447\u0442\u0438\u0432\u043e",level:2}],k={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gpg"},"GPG"),(0,r.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043e GnuPG, \u043a\u0430\u043a \u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0448\u044c."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0412 \u0441\u0442\u0430\u0442\u044c\u0435 \u0438\u0434\u0451\u0442 \u0440\u0435\u0447\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg"),", \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0441 \u043d\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"linux/macos")," \u043c\u0430\u0448\u0438\u043d\u0435.")),(0,r.kt)("p",null,"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 GnuPG ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/"},"\u0437\u0434\u0435\u0441\u044c"),", \u043e\u0433\u0440\u044b\u0437\u043a\u0438 \u0441\u043c\u044b\u0441\u043b\u043e\u0432 \u0432 \u0432\u0438\u0434\u0435 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430 ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/gph/en/manual.html"},"\u0437\u0434\u0435\u0441\u044c"),", \u0441\u0442\u0430\u0442\u044c\u044f \u0432 \u0440\u0443-\u0432\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438 \u0437\u0434\u0435\u0441\u044c.  "),(0,r.kt)("p",null,"\u0410 \u044d\u0442\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u0430\u0434\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043c\u0430\u043d\u044c\u044f\u043a\u0430\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044e\u0434\u0438 GnuPG (\u043a\u0430\u043a \u0438 PGP) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0443\u0442."),(0,r.kt)("h2",{id:"\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430--\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430"},"\u0428\u0438\u0444\u0440\u043e\u0432\u043a\u0430 / \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430"),(0,r.kt)("h3",{id:"\u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c-\u0444\u0430\u0439\u043b"},"\u0417\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg -e -a -r keyname@key.key filename.txt\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u043a\u043b\u044e\u0447"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-e")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Encrypt")," \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ASCII")," \u0440\u0435\u0436\u0438\u043c, \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u0442\u0435\u0445\u0441\u0442\u0432\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"recipient name")," \u043a\u043b\u044e\u0447 ",(0,r.kt)("em",{parentName:"td"},"\u043f\u0440\u043e\u0431\u0435\u043b")," \u0444\u0430\u0439\u043b")))),(0,r.kt)("h3",{id:"\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430"},"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0430"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u043a\u043b\u044e\u0447"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Decrypt")," \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output")," \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"td"},"\u0444\u0430\u0439\u043b")," ",(0,r.kt)("em",{parentName:"td"},"\u043f\u0440\u043e\u0431\u0435\u043b")," \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b")))),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASCII")," \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0443\u0434\u043e\u0431\u043d\u043e \u0432\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b.\n\u0421 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"asc"),". \u0418 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043b\u044e\u0447 ",(0,r.kt)("inlineCode",{parentName:"p"},"-d"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg -d input.asc\n")),(0,r.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435, \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0432\u044b\u043f\u0430\u0434\u0435\u0442 \u0442\u0435\u043a\u0441\u0442 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u0438\u0434\u0435."),(0,r.kt)("h3",{id:"\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c-\u0444\u0430\u0439\u043b"},"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg -d -o (\u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0444\u0430\u0439\u043b) (\u0444\u0430\u0439\u043b \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0443\u0435\u043c\u044b\u0439)\n")),(0,r.kt)("p",null,"\u0418\u043c\u044f \u043a\u043b\u044e\u0447\u0430 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u043e\u043d \u0435\u0441\u0442\u044c, \u043f\u0440\u043e\u0433\u0430\u0440\u043c\u043c\u0430 \u043d\u0430\u0439\u0434\u0435\u0442 \u0435\u0433\u043e \u0441\u0430\u043c\u0430."),(0,r.kt)("p",null,"\u041a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0432\u044b\u0436\u0438\u043c\u043a\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\u0445 \u043d\u0438\u0436\u0435."),(0,r.kt)("h3",{id:"\u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c-\u0441\u043f\u0438\u0441\u043e\u043a-\u043a\u043b\u044e\u0447\u0435\u0439"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043b\u044e\u0447\u0435\u0439"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043b\u044e\u0447"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-k")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--list-keys")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-K")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--list-secret-keys")),(0,r.kt)("td",{parentName:"tr",align:null},"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439")))),(0,r.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-keys")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"-k")," \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439.",(0,r.kt)("br",{parentName:"p"}),"\n","\u0414\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439 \u0435\u0441\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-secret-keys")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"-K")," (\u0431\u043e\u043b\u044c\u0448\u0430\u044f)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg -k\n")),(0,r.kt)("h2",{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430-\u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"--verify")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0444\u0430\u0439\u043b, \u0442\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"--verify"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b."),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0444\u0430\u0439\u043b \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0442\u043e\u043c \u0436\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438. \u043e\u0431\u044b\u0447\u043d\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"*.asc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0432 \u0444\u0430\u0439\u043b\ngpg --verify test.php.gpg\n\n# \u0444\u0430\u0439\u043b \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0432 \u044d\u0442\u043e\u043c \u0436\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u0432\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b.\ngpg --verify test.php.asc\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0430 \u043e\u0442 \u0444\u0430\u0439\u043b\u0430, \u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"--verify")," \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0432\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430: ",(0,r.kt)("em",{parentName:"p"},"\u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u0434\u0451\u0442 \u0444\u0430\u0439\u043b \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u044c\u044e"),", \u0430 \u0437\u0430\u0442\u0435\u043c ",(0,r.kt)("em",{parentName:"p"},"\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify (\u0444\u0430\u0439\u043b \u0441 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u043e\u0439) (\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b)\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0444\u0430\u0439\u043b \u043a\u043b\u044e\u0447, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"--keyring (\u043f\u0443\u0442\u044c \u043a \u043a\u043b\u044e\u0447\u0443)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify --keyring (\u043f\u0443\u0442\u044c \u043a \u043a\u043b\u044e\u0447\u0443) (\u0444\u0430\u0439\u043b \u0441 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u043e\u0439) (\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u044b\u0439 \u0444\u0430\u0439\u043b)\n")),(0,r.kt)("h2",{id:"\u0438\u043c\u043f\u043e\u0440\u0442--\u044d\u043a\u0441\u043f\u043e\u0440\u0442"},"\u0418\u043c\u043f\u043e\u0440\u0442 / \u044d\u043a\u0441\u043f\u043e\u0440\u0442"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--export")),(0,r.kt)("td",{parentName:"tr",align:null},"\u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439 ",(0,r.kt)("inlineCode",{parentName:"td"},">")," \u0432 \u0444\u0430\u0439\u043b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--export-secret-key")),(0,r.kt)("td",{parentName:"tr",align:null},"\u044d\u0441\u043f\u043e\u0440\u0442 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439 ",(0,r.kt)("inlineCode",{parentName:"td"},">")," \u0444\u0430\u0439\u043b")))),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," \u0432  ",(0,r.kt)("inlineCode",{parentName:"p"},"ASCII")," \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --export -a key@mail.com > public.gpg\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASCII")," \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --export-secret-key -a key@mail.com > secret.gpg\n")),(0,r.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"public.gpg")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"secret.gpg")),(0,r.kt)("p",null,"For import use ",(0,r.kt)("inlineCode",{parentName:"p"},"--import")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# import public key\ngpg --import public.gpg\n\n# import secret key\ngpg --import secret.gpg\n")),(0,r.kt)("h2",{id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435--\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043a\u043b\u044e\u0447\u0435\u0439"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 / \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043b\u044e\u0447\u0435\u0439"),(0,r.kt)("p",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0435\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"--edit-key"),"  "),(0,r.kt)("h3",{id:"\u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435-\u0441\u0440\u043e\u043a\u0430-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-\u043a\u043b\u044e\u0447\u0430"},"\u041f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043b\u044e\u0447\u0430"),(0,r.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"--edit-key"),", \u0434\u0430\u043b\u0435\u0435 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u044f.",(0,r.kt)("br",{parentName:"p"}),"\n","\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --edit-key 0x12345678\ngpg> expire\n...\ngpg> save\n")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'echo "keyid-format 0xlong\nthrow-keyids\nno-emit-version\nno-comments" > ~/.gnupg/gpg.conf\n')),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0435-\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435-\u0447\u0442\u0438\u0432\u043e"},"\u041f\u043e\u043b\u0435\u0437\u043d\u043e\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0438\u0432\u043e"),(0,r.kt)("p",null,"\u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0446\u0438\u0444\u0440\u043e\u0432\u0443\u044e \u043f\u043e\u0434\u043f\u0438\u0441\u044c Tor Browser?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://support.torproject.org/ru/tbb/how-to-verify-signature/"},"https://support.torproject.org/ru/tbb/how-to-verify-signature/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f gpg ",(0,r.kt)("a",{parentName:"p",href:"https://hackware.ru/?p=8215"},"https://hackware.ru/?p=8215"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://manpages.org/gpg"},"man")," gpg")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=I2mwqC6HGGE"},"\u0428\u0438\u0444\u0440\u0443\u0435\u043c \u0444\u0430\u0439\u043b\u044b \u0438 \u043f\u0430\u0440\u043e\u043b\u0438 \u0430\u043a\u0438 \u0426\u0430\u0440\u044c \u0441 GPG \u0438 Pass!"),"  \u0414\u0438\u0434\u0436\u0438\u0442\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0439")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2CwsoGw2coc"},"GPG. \u0428\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435")," Johe News"))))}d.isMDXComponent=!0}}]);