"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4566],{69521:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=t(85893),i=t(11151);const r={id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},s=void 0,l={id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",description:"Remote connection/protocol failed with: execution failed",source:"@site/../docs/troubleshooting-rbe.md",sourceDirName:".",slug:"/troubleshooting-rbe",permalink:"/docs/troubleshooting-rbe",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-rbe.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1721770939,formattedLastUpdatedAt:"Jul 23, 2024",frontMatter:{id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Slow Uploads",permalink:"/docs/troubleshooting-slow-upload"}},c={},a=[{value:"Remote connection/protocol failed with: execution failed",id:"remote-connectionprotocol-failed-with-execution-failed",level:2},{value:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns",id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",level:2},{value:"exec user process caused &quot;exec format error&quot;",id:"exec-user-process-caused-exec-format-error",level:2},{value:"rpc error: code = Unavailable desc = No registered executors.",id:"rpc-error-code--unavailable-desc--no-registered-executors",level:2},{value:"WARNING: Remote Cache: UNAVAILABLE: io exception",id:"warning-remote-cache-unavailable-io-exception",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"remote-connectionprotocol-failed-with-execution-failed",children:"Remote connection/protocol failed with: execution failed"}),"\n",(0,n.jsxs)(o.p,{children:["This error is often a sign that a cache write is timing out. By default, bazel's ",(0,n.jsx)(o.code,{children:"remote_timeout"})," ",(0,n.jsx)(o.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"flag"})," limits all remote execution calls to 60 seconds."]}),"\n",(0,n.jsx)(o.p,{children:"We recommend using the following flag to increase this remote timeout:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,n.jsx)(o.p,{children:"These expensive writes should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."}),"\n",(0,n.jsx)(o.h2,{id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",children:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns"}),"\n",(0,n.jsxs)(o.p,{children:["This error is a sign that a cache write is timing out. By default, bazel's ",(0,n.jsx)(o.code,{children:"remote_timeout"})," ",(0,n.jsx)(o.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"flag"})," limits all remote execution calls to 60 seconds."]}),"\n",(0,n.jsx)(o.p,{children:"We recommend using the following flag to increase this remote timeout:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,n.jsx)(o.h2,{id:"exec-user-process-caused-exec-format-error",children:'exec user process caused "exec format error"'}),"\n",(0,n.jsx)(o.p,{children:"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."}),"\n",(0,n.jsxs)(o.p,{children:["If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,n.jsx)(o.a,{href:"/request-demo/",children:"contact our sales team"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"rpc-error-code--unavailable-desc--no-registered-executors",children:"rpc error: code = Unavailable desc = No registered executors."}),"\n",(0,n.jsx)(o.p,{children:"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."}),"\n",(0,n.jsxs)(o.p,{children:["If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,n.jsx)(o.a,{href:"/request-demo/",children:"contact our sales team"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"warning-remote-cache-unavailable-io-exception",children:"WARNING: Remote Cache: UNAVAILABLE: io exception"}),"\n",(0,n.jsx)(o.p,{children:"This error may occur when Bazel fails to properly maintain a long-running TCP connection to BuildBuddy."}),"\n",(0,n.jsxs)(o.p,{children:["To check whether this is the case, try running Bazel with ",(0,n.jsx)(o.code,{children:"--remote_grpc_log=grpc.log"})," to capture the gRPC traffic\nbetween Bazel and BuildBuddy. The log file will be in protobuf format. To convert it to JSON format, download the ",(0,n.jsx)(o.a,{href:"/docs/cli",children:"BuildBuddy CLI"})," and run ",(0,n.jsx)(o.code,{children:"bb print --grpc_log=<path-to-file>/grpc.log"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"In the log, you may see network errors such as the following:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:'  "status":  {\n    "code":  14,\n    "message":  "io.netty.channel.unix.Errors$NativeIoException: readAddress(..) failed: Connection reset by peer"\n  },\n'})}),"\n",(0,n.jsx)(o.p,{children:"This typically happens when there is a proxy or gateway (e.g. AWS NAT Gateway) in between Bazel and BuildBuddy that is terminating idle connections too quickly."}),"\n",(0,n.jsx)(o.p,{children:"When this happens, try the following Linux network settings:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# Lowered from default value: 7200\nsudo sysctl -w net.ipv4.tcp_keepalive_time=180\n# Lowered from default value: 75\nsudo sysctl -w net.ipv4.tcp_keepalive_intvl=60\n# Lowered from default value: 9\nsudo sysctl -w net.ipv4.tcp_keepalive_probes=5\n"})}),"\n",(0,n.jsx)(o.p,{children:"This will cause the Linux kernel to send keepalive probes earlier and more frequently, before the proxy/gateway in the middle detects and drops the idle connection."}),"\n",(0,n.jsxs)(o.p,{children:["The optimal values may depend on specific network conditions, but try these values as a starting point. Please ",(0,n.jsx)(o.a,{href:"/contact/",children:"contact us"})," if you have any questions / concerns."]})]})}function u(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>s});var n=t(67294);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);