"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7031],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,_=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(_,p(p({ref:n},c),{},{components:t})):r.createElement(_,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(2962),a=t(2742),o=(t(9496),t(9613)),p=["components"],i={id:"errors",title:"\u932f\u8aa4\u78bc"},l=void 0,s={unversionedId:"errors",id:"errors",title:"\u932f\u8aa4\u78bc",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/zh-TW/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"errors",title:"\u932f\u8aa4\u78bc"},sidebar:"docs",previous:{title:"\u529f\u80fd\u6bd4\u8f03",permalink:"/zh-TW/next/feature-comparison"},next:{title:"Logos",permalink:"/zh-TW/next/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2},{value:"ERR_PNPM_TARBALL_INTEGRITY",id:"err_pnpm_tarball_integrity",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"\u6709\u4e00\u500b\u5df2\u5b58\u5728\u7684\u6a21\u7d44\u76ee\u9304\u4e26\u4e14\u88ab\u9023\u7d50\u5230\u4e0d\u540c\u7684\u5132\u85cf\u5eab\u76ee\u9304\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u610f\u66f4\u6539\u5132\u85cf\u5eab\u76ee\u9304\uff0c\u8acb\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\uff0cpnpm \u5c07\u4f7f\u7528\u65b0\u7684\u5132\u85cf\u5eab\u91cd\u65b0\u5b89\u88dd\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"\u5c08\u6848\u64c1\u6709\u5de5\u4f5c\u5340\u4e2d\u4e0d\u5b58\u5728\u7684\u5de5\u4f5c\u5340\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5957\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e2d\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"\u7136\u800c\uff0c\u5de5\u4f5c\u5340\u4e2d\u53ea\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0"),"\uff0c\u56e0\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c07\u6703\u5931\u6557\u3002"),(0,o.kt)("p",null,"\u82e5\u8981\u4fee\u5fa9\u6b64\u554f\u984c\uff0c\u61c9\u66f4\u65b0\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/next/workspaces#workspace-protocol-workspace"},"workspace protocol")," \u7684\u6240\u6709\u4f9d\u8cf4\u5957\u4ef6\uff0c\u4ee5\u4f7f\u7528\u5de5\u4f5c\u5340\u4e2d\u5b58\u5728\u7684\u7248\u672c\u3002 \u9019\u4e5f\u53ef\u4ee5\u624b\u52d5\u5b8c\u6210\uff0c\u6216\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," \u6307\u4ee4\u3002"),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,"\u82e5\u5c08\u6848\u4e2d\u5b58\u5728\u672a\u89e3\u6790\u7684\u5c0d\u7b49\u4f9d\u8cf4\u5957\u4ef6\u6216\u662f\u8207\u6240\u9700\u7bc4\u570d\u4e0d\u7b26\u7684\u5c0d\u7b49\u4f9d\u8cf4\u5957\u4ef6\uff0c\u5247 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c07\u6703\u5931\u6557\u3002 \u82e5\u8981\u4fee\u6b63\u6b64\u554f\u984c\uff0c\u8acb\u5b89\u88dd\u7f3a\u5c11\u7684\u5c0d\u7b49\u4f9d\u8cf4\u5957\u4ef6\u3002"),(0,o.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," \u4f86\u9078\u64c7\u6027\u5730\u5ffd\u7565\u9019\u4e9b\u554f\u984c\u3002"),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"\u5982\u679c\u7121\u6cd5\u5728\u4e0d\u8b8a\u66f4 lockfile \u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u5b89\u88dd\uff0c\u5247\u6703\u767c\u751f\u6b64\u932f\u8aa4\u3002 \u9019\u53ef\u80fd\u6703\u5728 CI \u74b0\u5883\u4e2d\u767c\u751f\uff0c\u7576\u6709\u4eba\u66f4\u6539\u4e86\u5132\u85cf\u5eab\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u6a94\u6848\uff0c\u800c\u6c92\u6709\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u3002 \u6216\u662f\u6709\u4eba\u5fd8\u8a18\u63d0\u4ea4\u66f4\u6539\u5f8c\u7684 lockfile\u3002"),(0,o.kt)("p",null,"\u82e5\u8981\u4fee\u5fa9\u6b64\u554f\u984c\uff0c\u53ea\u9700\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u4e26\u63d0\u4ea4\u66f4\u6539\u5f8c\u7684 lockfile\u3002"),(0,o.kt)("h2",{id:"err_pnpm_tarball_integrity"},"ERR","_","PNPM","_","TARBALL","_","INTEGRITY"),(0,o.kt)("p",null,"This error indicates that the downloaded package's tarball did not match the expected integrity checksum."),(0,o.kt)("p",null,"If you use the npm registry (",(0,o.kt)("inlineCode",{parentName:"p"},"registry.npmjs.org"),"), then this probably means that the integrity in your lockfile is incorrect. This might happen if a lockfile had badly resolved merge conflicts."),(0,o.kt)("p",null,"If you use a registry that allows to override existing versions of a package, then it might mean that in your local metadata cache you have the integrity checksum of an older version of the package. In this case, you should run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune"),". This command will remove your local metadata cache. Then you can retry the command that failed."),(0,o.kt)("p",null,"But also be careful and verify that the package is downloaded from the right URL. The URL should be printed in the error message."))}m.isMDXComponent=!0}}]);