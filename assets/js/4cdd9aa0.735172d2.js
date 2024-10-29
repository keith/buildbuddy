"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5613],{91250:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var l=t(74848),n=t(28453);const i={id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",sidebar_label:"Slow Uploads"},s=void 0,d={id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",description:"The Build Event Protocol upload timed out",source:"@site/../docs/troubleshooting-slow-upload.md",sourceDirName:".",slug:"/troubleshooting-slow-upload",permalink:"/docs/troubleshooting-slow-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-slow-upload.md",tags:[],version:"current",lastUpdatedBy:"George Li",lastUpdatedAt:1730228714e3,frontMatter:{id:"troubleshooting-slow-upload",title:"Troubleshooting Slow Uploads",sidebar_label:"Slow Uploads"},sidebar:"someSidebar",previous:{title:"RBE Failures",permalink:"/docs/troubleshooting-rbe"},next:{title:"BuildBuddy Enterprise",permalink:"/docs/enterprise"}},r={},a=[{value:"The Build Event Protocol upload timed out",id:"the-build-event-protocol-upload-timed-out",level:2},{value:"Waiting for build events upload",id:"waiting-for-build-events-upload",level:2}];function u(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h2,{id:"the-build-event-protocol-upload-timed-out",children:"The Build Event Protocol upload timed out"}),"\n",(0,l.jsxs)(o.p,{children:["This error means the ",(0,l.jsx)(o.code,{children:"bes_timeout"})," ",(0,l.jsx)(o.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--bes_timeout",children:"flag"})," is likely set to a value that's not long enough for bazel to finish uploading all build artifacts."]}),"\n",(0,l.jsx)(o.p,{children:"We recommend using the following flag to increase this upload timeout:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"--bes_timeout=600s\n"})}),"\n",(0,l.jsx)(o.p,{children:"These slow uploads should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."}),"\n",(0,l.jsx)(o.h2,{id:"waiting-for-build-events-upload",children:"Waiting for build events upload"}),"\n",(0,l.jsx)(o.p,{children:"If your build has finished but you're frequently sitting around waiting for build events to upload - you're likely in a network constrained environment trying to upload large build artifacts like docker images or large binaries."}),"\n",(0,l.jsx)(o.p,{children:"For network constrained environments, we recommend running with the flag:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"--noremote_upload_local_results\n"})}),"\n",(0,l.jsx)(o.p,{children:"This will upload build, test, and profiling logs - but not the larger build artifacts that can take much longer to upload."})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>d});var l=t(96540);const n={},i=l.createContext(n);function s(e){const o=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(i.Provider,{value:o},e.children)}}}]);