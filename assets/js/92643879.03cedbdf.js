"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5156],{87850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var i=n(85893),o=n(11151);const s={id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},l=void 0,a={id:"config-flags",title:"BuildBuddy Flags",description:"There are several configuration options that are not in the BuildBuddy configuration file. These are:",source:"@site/../docs/config-flags.md",sourceDirName:".",slug:"/config-flags",permalink:"/docs/config-flags",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-flags.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1707248877,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},sidebar:"someSidebar",previous:{title:"Telemetry",permalink:"/docs/config-telemetry"},next:{title:"All Options",permalink:"/docs/config-all-options"}},d={},r=[{value:"Configuration options as flags",id:"configuration-options-as-flags",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"There are several configuration options that are not in the BuildBuddy configuration file. These are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--config_file"})," The path to a config.yaml file from which to read configuration options."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--listen"})," The interface that BuildBuddy will listen on. Defaults to 0.0.0.0 (all interfaces)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--port"})," The port to listen for HTTP traffic on. Defaults to 8080."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--grpc_port"})," The port to listen for gRPC traffic on. Defaults to 1985."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--monitoring_port"})," The port to listen for Prometheus metrics requests on. Defaults to 9090."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuration-options-as-flags",children:"Configuration options as flags"}),"\n",(0,i.jsxs)(t.p,{children:["Additionally any ",(0,i.jsx)(t.a,{href:"/docs/config",children:"configuration option"})," can also be specified as a flag instead using dot notation."]}),"\n",(0,i.jsx)(t.p,{children:"For example the following configuration option:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'database:\n  data_source: "mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Would be specified as a flag like so:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'--database.data_source="mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var i=n(67294);const o={},s=i.createContext(o);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);