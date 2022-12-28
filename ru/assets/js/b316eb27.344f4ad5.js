"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5917],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),s=p,k=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(2962),p=n(2742),l=(n(9496),n(9613)),a=["components"],c={id:"dlx",title:"pnpm dlx"},o=void 0,i={unversionedId:"cli/dlx",id:"cli/dlx",title:"pnpm dlx",description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430, \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044f \u0435\u0433\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0435\u0433\u043e \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043b\u044e\u0431\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443 \u043f\u0430\u043a\u0435\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/ru/next/cli/dlx",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/ru/next/cli/exec"},next:{title:"pnpm create",permalink:"/ru/next/cli/create"}},u={},d=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--package &lt;\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--package-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u0430",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],m={toc:d};function s(e){var t=e.components,n=(0,p.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430, \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044f \u0435\u0433\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0435\u0433\u043e \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043b\u044e\u0431\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443 \u043f\u0430\u043a\u0435\u0442\u0430."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 react \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,l.kt)("p",null,"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438."),(0,l.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a\u0443\u044e \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"--package-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u0430"},"--package ","<","\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,l.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,l.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,l.kt)("p",null,"Added in: v7.21.0"),(0,l.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,l.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,l.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm --package cowsay --package lolcatjs -c dlx 'echo \"hi pnpm\" | cowsay | lolcatjs'\n")),(0,l.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,l.kt)("p",null,"Only the output of the executed command is printed."))}s.isMDXComponent=!0}}]);