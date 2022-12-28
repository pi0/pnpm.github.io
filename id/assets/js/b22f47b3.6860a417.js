"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2250],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(2962),i=n(2742),a=(n(9496),n(9613)),l=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,s={unversionedId:"cli/publish",id:"cli/publish",title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/id/next/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"docs",previous:{title:"pnpm env <cmd>",permalink:"/id/next/cli/env"},next:{title:"pnpm pack",permalink:"/id/next/cli/pack"}},c={},u=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"Konfigurasi",id:"konfigurasi",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Publishes a package to the registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,a.kt)("p",null,"When publishing a package inside a ",(0,a.kt)("a",{parentName:"p",href:"/id/next/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,a.kt)("p",null,"You may override some fields before publish, using the ",(0,a.kt)("a",{parentName:"p",href:"/id/next/package_json#publishconfig"},"publishConfig")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". You also can use the ",(0,a.kt)("a",{parentName:"p",href:"/id/next/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," to customize the published subdirectory (usually using third party build tools)."),(0,a.kt)("p",null,"When running this command recursively (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Publish all packages from the workspace."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Menampilkan informasi dalam bentuk JSON."),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,a.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,a.kt)("p",null,"Don't check if current branch is your publish branch, clean, and up-to-date with remote."),(0,a.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"master")," and ",(0,a.kt)("strong",{parentName:"li"},"main")),(0,a.kt)("li",{parentName:"ul"},"Types: ",(0,a.kt)("strong",{parentName:"li"},"String"))),(0,a.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"Save the list of published packages to ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,a.kt)("p",null,"An example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishedPackages": [\n    {\n      "name": "foo",\n      "version": "1.0.0"\n    },\n    {\n      "name": "bar",\n      "version": "2.0.0"\n    }\n  }\n]\n')),(0,a.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,a.kt)("p",null,"Does everything a publish would do except actually publishing to the registry."),(0,a.kt)("h3",{id:"--otp"},"--otp"),(0,a.kt)("p",null,"When publishing packages that require two-factor authentication, this option can specify a one-time password."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/id/next/filtering"},"Read more about filtering.")),(0,a.kt)("h2",{id:"konfigurasi"},"Konfigurasi"),(0,a.kt)("p",null,"You can also set ",(0,a.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"publish-branch")," options in the ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," file."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")))}d.isMDXComponent=!0}}]);