"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5748],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return b}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(o),f=r,b=p["".concat(u,".").concat(f)]||p[f]||c[f]||l;return o?n.createElement(b,i(i({ref:t},s),{},{components:o})):n.createElement(b,i({ref:t},s))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<l;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},25272:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p}});var n=o(83117),r=o(80102),l=(o(67294),o(3905)),i=["components"],a={id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",sidebar_label:"Slow Uploads"},u=void 0,d={unversionedId:"troubleshooting-slow-upload",id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",description:"The Build Event Protocol upload timed out",source:"@site/../docs/troubleshooting-slow-upload.md",sourceDirName:".",slug:"/troubleshooting-slow-upload",permalink:"/docs/troubleshooting-slow-upload",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-slow-upload.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1693327249,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",sidebar_label:"Slow Uploads"},sidebar:"someSidebar",previous:{title:"RBE Failures",permalink:"/docs/troubleshooting-rbe"},next:{title:"BuildBuddy Enterprise",permalink:"/docs/enterprise"}},s={},p=[{value:"The Build Event Protocol upload timed out",id:"the-build-event-protocol-upload-timed-out",level:2},{value:"Waiting for build events upload",id:"waiting-for-build-events-upload",level:2}],c={toc:p},f="wrapper";function b(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)(f,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-build-event-protocol-upload-timed-out"},"The Build Event Protocol upload timed out"),(0,l.kt)("p",null,"This error means the ",(0,l.kt)("inlineCode",{parentName:"p"},"bes_timeout")," ",(0,l.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--bes_timeout"},"flag")," is likely set to a value that's not long enough for bazel to finish uploading all build artifacts."),(0,l.kt)("p",null,"We recommend using the following flag to increase this upload timeout:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--bes_timeout=600s\n")),(0,l.kt)("p",null,"These slow uploads should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."),(0,l.kt)("h2",{id:"waiting-for-build-events-upload"},"Waiting for build events upload"),(0,l.kt)("p",null,"If your build has finished but you're frequently sitting around waiting for build events to upload - you're likely in a network constrained environment trying to upload large build artifacts like docker images or large binaries."),(0,l.kt)("p",null,"For network constrained environments, we recommend running with the flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--noremote_upload_local_results\n")),(0,l.kt)("p",null,"This will upload build, test, and profiling logs - but not the larger build artifacts that can take much longer to upload."))}b.isMDXComponent=!0}}]);