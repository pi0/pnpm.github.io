"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7114],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,g=m["".concat(o,".").concat(h)]||m[h]||u[h]||s;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=t(2962),a=t(2742),s=(t(9496),t(9613)),i=["components"],p={id:"using-changesets",title:"\u642d\u914d pnpm \u4f7f\u7528 Changesets"},o=void 0,l={unversionedId:"using-changesets",id:"version-7.x/using-changesets",title:"\u642d\u914d pnpm \u4f7f\u7528 Changesets",description:"\u5728\u64b0\u5beb\u672c\u6587\u4ef6\u6642\uff0c\u6700\u65b0\u7684 pnpm \u7248\u672c\u70ba v6.14\u3002 \u6700\u65b0\u7684 Changesets \u7248\u672c\u70ba 2.16.0 \u7248\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/zh-TW/using-changesets",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"using-changesets",title:"\u642d\u914d pnpm \u4f7f\u7528 Changesets"},sidebar:"version-7.x/docs",previous:{title:"Tab \u9375\u81ea\u52d5\u5b8c\u6210\u547d\u4ee4",permalink:"/zh-TW/completion"},next:{title:"\u6301\u7e8c\u6574\u5408 (CI)",permalink:"/zh-TW/continuous-integration"}},c={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u6dfb\u52a0\u65b0\u7684 changesets",id:"\u6dfb\u52a0\u65b0\u7684-changesets",level:2},{value:"\u767c\u5e03\u8b8a\u66f4",id:"\u767c\u5e03\u8b8a\u66f4",level:2},{value:"\u4f7f\u7528 GitHub Actions",id:"\u4f7f\u7528-github-actions",level:2},{value:"\u63d0\u5347\u7248\u672c\u865f",id:"\u63d0\u5347\u7248\u672c\u865f",level:3},{value:"\u767c\u4f48",id:"\u767c\u4f48",level:3}],m={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5728\u64b0\u5beb\u672c\u6587\u4ef6\u6642\uff0c\u6700\u65b0\u7684 pnpm \u7248\u672c\u70ba v6.14\u3002 \u6700\u65b0\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \u7248\u672c\u70ba 2.16.0 \u7248\u3002")),(0,s.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,s.kt)("p",null,"\u8981\u5728 pnpm workspace \u4e0a\u8a2d\u7f6e changesets \uff0c\u8acb\u5c07 changesets \u4f5c\u70ba\u958b\u767c\u4f9d\u8cf4\u9805 \u5b89\u88dd\u5728 workspace \u7684\u6839\u76ee\u9304\u4e2d\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,s.kt)("p",null,"\u7136\u5f8c\u662f changesets \u7684\u521d\u59cb\u5316\u6307\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,s.kt)("h2",{id:"\u6dfb\u52a0\u65b0\u7684-changesets"},"\u6dfb\u52a0\u65b0\u7684 changesets"),(0,s.kt)("p",null,"\u8981\u751f\u6210\u65b0\u7684 changesets\uff0c\u8acb\u5728 workspace \u7684\u6839\u76ee\u9304\u4e0b\u904b\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm changesets")," \u3002 \u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u9304\u4e2d\u751f\u6210\u7684 markdown \u6587\u4ef6\u61c9\u88ab \u63d0\u4ea4\u5230 repository\u3002"),(0,s.kt)("h2",{id:"\u767c\u5e03\u8b8a\u66f4"},"\u767c\u5e03\u8b8a\u66f4"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u57f7\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset version"),". \u9019\u5c07\u63d0\u9ad8\u5148\u524d\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," \u7684\u5957\u4ef6\uff08\u4ee5\u53ca\u5b83\u5011\u7684\u4efb\u4f55\u4f9d\u8cf4\u9805\uff09\u7684\u7248\u672c\uff0c\u4e26\u66f4\u65b0\u8b8a\u66f4\u65e5\u8a8c(changelog) \u6587\u4ef6\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u57f7\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm install"),"\u3002 \u9019\u5c07\u6703\u66f4\u65b0 lockfile \u53ca\u91cd\u65b0\u6253\u5305\u5957\u4ef6\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u66f4\u6539"),(0,s.kt)("li",{parentName:"ol"},"\u57f7\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),"\u3002 \u6b64\u547d\u4ee4\u5c07\u767c\u5e03\u6240\u6709\u5305\u542b\u88ab\u66f4\u65b0\u7248\u672c\u4e14\u5c1a\u672a\u51fa\u73fe\u5728\u8a3b\u518a\u6e90\u4e2d\u7684\u5957\u4ef6\u3002")),(0,s.kt)("h2",{id:"\u4f7f\u7528-github-actions"},"\u4f7f\u7528 GitHub Actions"),(0,s.kt)("p",null,"\u82e5\u8981\u81ea\u52d5\u5316\u9019\u500b\u6d41\u7a0b\uff0c\u60a8\u53ef\u4ee5\u5c07 ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version")," \u8207 GitHub Actions \u642d\u914d\u4f7f\u7528\u3002"),(0,s.kt)("h3",{id:"\u63d0\u5347\u7248\u672c\u865f"},"\u63d0\u5347\u7248\u672c\u865f"),(0,s.kt)("p",null,"\u7576\u6aa2\u6e2c\u5230 changeset \u6587\u4ef6\u88ab\u5408\u4f75\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u6642\uff0c\u8a72 action \u5c07\u5275\u5efa\u4e00\u500b\u65b0\u7684 PR\uff0c\u5217\u51fa\u6240\u6709\u61c9\u8a72\u8b8a\u66f4\u7248\u672c\u865f\u7684\u5957\u4ef6\u3002 \u5408\u4f75\u5f8c\uff0c\u5305\u5c07\u88ab\u66f4\u65b0\uff0c\u60a8\u53ef\u4ee5\u901a\u904e\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"publish")," \u5c6c\u6027\u4f86\u6c7a\u5b9a\u662f\u5426\u767c\u5e03\u3002"),(0,s.kt)("h3",{id:"\u767c\u4f48"},"\u767c\u4f48"),(0,s.kt)("p",null,"Add a new script ",(0,s.kt)("inlineCode",{parentName:"p"},"ci:publish")," which executes ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm publish -r"),". It will publish to the registry once the PR is opened by ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"package.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "scripts": {\n      "ci:publish": "pnpm publish -r"\n   },\n   ...\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v3\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,s.kt)("p",null,"\u6709\u95dc\u6b64\u64cd\u4f5c\u7684\u66f4\u591a\u8cc7\u8a0a\u548c\u6587\u6a94\u53ef\u4ee5\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"\u9019\u88e1"),"\u627e\u5230\u3002"))}h.isMDXComponent=!0}}]);