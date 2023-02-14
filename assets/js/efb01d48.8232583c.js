"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3366],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,b=p["".concat(d,".").concat(y)]||p[y]||s[y]||o;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(4137)),a=["components"],l={id:"config-samples",title:"Sample Configuration Files",sidebar_label:"Samples"},d=void 0,c={unversionedId:"config-samples",id:"config-samples",title:"Sample Configuration Files",description:"Running locally (disk only)",source:"@site/../docs/config-samples.md",sourceDirName:".",slug:"/config-samples",permalink:"/docs/config-samples",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-samples.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1676414895,formattedLastUpdatedAt:"2/14/2023",frontMatter:{id:"config-samples",title:"Sample Configuration Files",sidebar_label:"Samples"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/config"},next:{title:"App",permalink:"/docs/config-app"}},u=[{value:"Running locally (disk only)",id:"running-locally-disk-only",children:[],level:3},{value:"Running with MySQL and in-memory cache",id:"running-with-mysql-and-in-memory-cache",children:[],level:3},{value:"Enterprise",id:"enterprise",children:[{value:"Running with your own auth provider",id:"running-with-your-own-auth-provider",children:[],level:3},{value:"Fully loaded",id:"fully-loaded",children:[],level:3}],level:2}],s={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"running-locally-disk-only"},"Running locally (disk only)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://localhost:8080"\ndatabase:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\nstorage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /tmp/buildbuddy\ncache:\n  max_size_bytes: 10000000000  # 10 GB\n  disk:\n    root_directory: /tmp/buildbuddy-cache\n')),(0,o.kt)("h3",{id:"running-with-mysql-and-in-memory-cache"},"Running with MySQL and in-memory cache"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://acme.corp"\ndatabase:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\nstorage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /data/buildbuddy\ncache:\n  max_size_bytes: 10000000000  # 10 GB\n  in_memory: true\n')),(0,o.kt)("h2",{id:"enterprise"},"Enterprise"),(0,o.kt)("h3",{id:"running-with-your-own-auth-provider"},"Running with your own auth provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "http://acme.corp"\ndatabase:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\nstorage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /data/buildbuddy\ncache:\n  max_size_bytes: 10000000000  # 10 GB\n  in_memory: true\nauth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "12345678911-f1r0phjnhbabcdefm32etnia21keeg31.apps.googleusercontent.com"\n      client_secret: "sEcRetKeYgOeShErE"\n')),(0,o.kt)("h3",{id:"fully-loaded"},"Fully loaded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain"\n  events_api_url: "grpcs://events.buildbuddy.mydomain:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\nstorage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n    redis_target: "12.34.56.79:6379"\n    gcs:\n      bucket: "buildbuddy_cache"\n      project_id: "your_gcs_project_id"\n      credentials_file: "/path/to/your/credential/file.json"\n      ttl_days: 30\nauth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc7sx0kUW123x6"\n      client_secret: "P8fRAYxWMmGhdA9040GV2_q9MZ6esTJif1n4BubxU"\nssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\nremote_execution:\n  enable_remote_exec: true\n')))}p.isMDXComponent=!0}}]);