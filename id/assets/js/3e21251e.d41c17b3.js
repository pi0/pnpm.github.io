"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6952],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=t(2962),o=t(2742),a=(t(9496),t(9613)),i=["components"],p={id:"errors",title:"Error Codes"},l=void 0,s={unversionedId:"errors",id:"version-7.x/errors",title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/id/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"version-7.x/docs",previous:{title:"Bekerja dengan Git",permalink:"/id/git"},next:{title:"Logos",permalink:"/id/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2},{value:"ERR_PNPM_TARBALL_INTEGRITY",id:"err_pnpm_tarball_integrity",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"A modules directory is present and is linked to a different store directory."),(0,a.kt)("p",null,"If you changed the store directory intentionally, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," and pnpm will reinstall the dependencies using the new store."),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"A project has a workspace dependency that does not exist in the workspace."),(0,a.kt)("p",null,"For instance, package ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," has ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"However, there is only ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," in the workspace, so ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail."),(0,a.kt)("p",null,"To fix this error, all dependencies that use the ",(0,a.kt)("a",{parentName:"p",href:"/id/workspaces#workspace-protocol-workspace"},"workspace protocol")," should be updated to use versions of packages that are present in the workspace. This can be done either manually or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," command."),(0,a.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail if the project has unresolved peer dependencies or the peer dependencies are not matching the wanted ranges. To fix this, install the missing peer dependencies."),(0,a.kt)("p",null,"You may also selectively ignore these errors using the ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," and ",(0,a.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," fields in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,a.kt)("p",null,"This error happens when installation cannot be performed without changes to the lockfile. This might happen in a CI environment if someone has changed a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file in the repository without running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," afterwards. Or someone forgot to commit the changes to the lockfile."),(0,a.kt)("p",null,"To fix this error, just run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes to the lockfile."),(0,a.kt)("h2",{id:"err_pnpm_tarball_integrity"},"ERR","_","PNPM","_","TARBALL","_","INTEGRITY"),(0,a.kt)("p",null,"This error indicates that the downloaded package's tarball did not match the expected integrity checksum."),(0,a.kt)("p",null,"If you use the npm registry (",(0,a.kt)("inlineCode",{parentName:"p"},"registry.npmjs.org"),"), then this probably means that the integrity in your lockfile is incorrect. This might happen if a lockfile had badly resolved merge conflicts."),(0,a.kt)("p",null,"If you use a registry that allows to override existing versions of a package, then it might mean that in your local metadata cache you have the integrity checksum of an older version of the package. In this case, you should run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm store prune"),". This command will remove your local metadata cache. Then you can retry the command that failed."),(0,a.kt)("p",null,"But also be careful and verify that the package is downloaded from the right URL. The URL should be printed in the error message."))}m.isMDXComponent=!0}}]);