"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3495],{9613:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||p;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=s;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2697:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(2848),o=t(9213),p=(t(9496),t(9613)),i=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"cli/import",title:"pnpm import",description:"pnpm import gera um pnpm-lock.yaml a partir de um lockfile de outro gerenciador de pacotes. Arquivos de origem suportados:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/pt/next/cli/import",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"import",title:"pnpm import"},sidebar:"docs",previous:{title:"pnpm unlink",permalink:"/pt/next/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/pt/next/cli/rebuild"}},m={},u=[],s={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm import")," gera um ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," a partir de um lockfile de outro gerenciador de pacotes. Arquivos de origem suportados:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"yarn.lock"))),(0,p.kt)("p",null,"Observe que se voc\xea tiver workspaces para os quais deseja importar depend\xeancias, eles precisar\xe3o ser declarados em um arquivo ",(0,p.kt)("a",{parentName:"p",href:"/pt/next/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," previamente."))}d.isMDXComponent=!0}}]);