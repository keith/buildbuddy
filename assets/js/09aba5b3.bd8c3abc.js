"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1616],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,b=p["".concat(l,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9704:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],u={id:"cloud",title:"Cloud Quickstart",sidebar_label:"Cloud Quickstart"},l=void 0,d={unversionedId:"cloud",id:"cloud",title:"Cloud Quickstart",description:"Cloud BuildBuddy is a fully managed SaaS solution for Enterprise Bazel features. It provides a results store & UI, remote build caching, remote build execution, and more.",source:"@site/../docs/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/docs/cloud",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cloud.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1675277628,formattedLastUpdatedAt:"2/1/2023",frontMatter:{id:"cloud",title:"Cloud Quickstart",sidebar_label:"Cloud Quickstart"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"On-prem Quickstart",permalink:"/docs/on-prem"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"Verifying your installation",id:"verifying-your-installation",children:[],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"More features",id:"more-features",children:[],level:2}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud BuildBuddy")," is a fully managed SaaS solution for Enterprise Bazel features. It provides a results store & UI, remote build caching, remote build execution, and more."),(0,i.kt)("p",null,"It's easy to get set up and is free for individuals and open source projects. For companies, we offer an ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise")," version of BuildBuddy that contains advanced features like OIDC Auth, API access, and more."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To use BuildBuddy's Results UI, you just need to configure Bazel to send build events to our cloud BuildBuddy instance. The easiest way to do this is with a ",(0,i.kt)("inlineCode",{parentName:"p"},".bazelrc")," file in the root of your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"build --bes_results_url=https://app.buildbuddy.io/invocation/\nbuild --bes_backend=grpcs://remote.buildbuddy.io\n")),(0,i.kt)("p",null,"That's it, 2 lines and you're up and running. For more advanced configurations, see the ",(0,i.kt)("a",{parentName:"p",href:"#authentication"},"Authentication")," and ",(0,i.kt)("a",{parentName:"p",href:"#more-features"},"More features")," sections below."),(0,i.kt)("h2",{id:"verifying-your-installation"},"Verifying your installation"),(0,i.kt)("p",null,"Now, when you build or test with Bazel, it will print a url where you can view your build or test results. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tylerw@lunchbox:~/buildbuddy-io/buildbuddy$ bazel build server:all\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/24a37b8f-4cf2-4909-9522-3cc91d2ebfc4\nINFO: Analyzed 13 targets (0 packages loaded, 0 targets configured).\nINFO: Found 13 targets...\nINFO: Elapsed time: 0.212s, Critical Path: 0.01s\nINFO: 0 processes.\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/24a37b8f-4cf2-4909-9522-3cc91d2ebfc4\nINFO: Build completed successfully, 1 total action\n")),(0,i.kt)("p",null,"You can \u2318 + double-click on these urls to quickly view the invocation's details."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"BuildBuddy Cloud offers three authentication options which are easy to configure on BuildBuddy Cloud:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unauthenticated")," - your build logs are uploaded over an encrypted gRPCS/TLS connection and be accessible with anyone you share your BuildBuddy URL with, without credentials. They will not be associated with any BuildBuddy account or organization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API key based auth")," - your build logs are uploaded over an encrypted gRPCS/TLS connection, and will be associated with your account. Only your account and members of your BuildBuddy organization will be able to view your build logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Certificate based auth")," - your build logs are uploaded over an encrypted ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mTLS")," (mutual TLS) connection. Only your account and members of your BuildBuddy organization will be able to view your build logs.")),(0,i.kt)("p",null,"To configure one of these authentication methods:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/"},"Create")," a BuildBuddy account."),(0,i.kt)("li",{parentName:"ol"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/docs/setup"},"Quickstart page")," which will now contain authentication options.")),(0,i.kt)("p",null,"For more information see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide-auth"},"Authentication Guide"),"."),(0,i.kt)("h2",{id:"more-features"},"More features"),(0,i.kt)("p",null,"For instructions on how to configure additional BuildBuddy features like Remote Build Caching, Remote Build Execution, and more:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/"},"Create")," a BuildBuddy account."),(0,i.kt)("li",{parentName:"ol"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/docs/setup"},"Quickstart page")," which has instructions on enabling Remote Build Cache, Remote Build Execution, and more.")),(0,i.kt)("p",null,"For more information on getting started with Remote Build Execution, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"RBE setup docs"),"."))}p.isMDXComponent=!0}}]);