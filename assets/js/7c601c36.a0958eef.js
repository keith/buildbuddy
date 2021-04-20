(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(152)),i={slug:"buildbuddy-v1-0-6-release-notes",title:"BuildBuddy v1.0.6 Release Notes",author:"Siggi Simonarson",author_title:"BuildBuddy Co-founder",date:"2020-05-20:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},u={permalink:"/blog/buildbuddy-v1-0-6-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/blog/blog/buildbuddy-v1-0-6-release-notes.md",source:"@site/blog/buildbuddy-v1-0-6-release-notes.md",description:"Excited to share that v1.0.6 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open source via Github and Docker!",date:"2020-05-20T12:00:00.000Z",formattedDate:"May 20, 2020",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"release-notes",permalink:"/blog/tags/release-notes"}],title:"BuildBuddy v1.0.6 Release Notes",readingTime:2.525,truncated:!1,prevItem:{title:"BuildBuddy v1.2.1 Release Notes",permalink:"/blog/buildbuddy-v1-2-1-release-notes"},nextItem:{title:"Introducing BuildBuddy Version 1.0",permalink:"/blog/introducing-buildbuddy-v1"}},d=[{value:"New to Open Source BuildBuddy",id:"new-to-open-source-buildbuddy",children:[]},{value:"New to Cloud &amp; Enterprise BuildBuddy",id:"new-to-cloud--enterprise-buildbuddy",children:[]}],l={toc:d};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Excited to share that v1.0.6 of BuildBuddy is live on both ",Object(o.b)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud Hosted BuildBuddy")," and open source via ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy"},"Github")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/SETUP.md#docker-image"},"Docker"),"!"),Object(o.b)("p",null,"Thanks to all of you that have been using open source and cloud-hosted BuildBuddy. We've made lots of improvements in this release based on your feedback."),Object(o.b)("p",null,"A special thank you to our new contributors:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/rogerhu"},"Roger Hu")," who contributed ",Object(o.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/commit/8ba12398e448b457cdbd1e0c8913e9aba46323cb"},"Amazon S3 storage support"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/achew22"},"Andrew Allen")," who ",Object(o.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/commit/59bee5228c7c3da9d0cdaba934fce2118e7e9adc"},"updated BuildBuddy's open source repo")," to conform to open source golang expectations.")),Object(o.b)("p",null,"Our three major focuses for this release were on a better test results view, certificate based authentication, and our new results-store API."),Object(o.b)("p",null,"We also laid a lot of groundwork for remote build execution in this release, which will be available in the coming weeks."),Object(o.b)("h2",{id:"new-to-open-source-buildbuddy"},"New to Open Source BuildBuddy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Test results view")," - we've added support for parsing test.xml files that are uploaded to a BuildBuddy remote cache. This allows us to show information about individual test cases and quickly surface information on which test cases failed and why.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Large log file support")," - we've improved BuildBuddy's log viewer to enable the rendering of 100MB+ log files with full ANSI color support in milliseconds using incremental rendering.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Timing controls")," - BuildBuddy's timing tab now has improved controls that enable users to choose grouping and page size options. This allows you to easily see the slowest build phases across threads.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"gRPCS support")," - BuildBuddy now supports and defaults to encrypted gRPCS connections to Bazel using TLS. Support includes automatic obtaining of server-side TLS certificates using ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Automated_Certificate_Management_Environment"},"ACME")," and ",Object(o.b)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),". This also includes the ability to connect to remote caches over gRPCS via the bytestream API.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"URL secret redaction")," - we've updated our log scrubbing logic to redact any URLs that might contain secrets from uploaded build events."))),Object(o.b)("p",null,"Our open source BuildBuddy distribution is targeted at individuals viewing and debugging their Bazel builds. For teams and organizations, we provide an enterprise version of BuildBuddy that adds support for team-specific features."),Object(o.b)("p",null,"Many of these Enterprise features are also available for free to individuals via ",Object(o.b)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud Hosted BuildBuddy"),"."),Object(o.b)("p",null,"\u200d"),Object(o.b)("h2",{id:"new-to-cloud--enterprise-buildbuddy"},"New to Cloud & Enterprise BuildBuddy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Certificate based auth")," - authentication between Bazel and BuildBuddy can now be authenticated and encrypted using certificate-based ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mTLS"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Auth configuration widget")," - using BuildBuddy's new configuration widget, it's easy to setup an auth configuration that makes sense for your team. This includes options to pull credentials into user-specific .bazelrc files and download generated auth certificates.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Build Results API")," - many teams want to do more with their build results. With BuildBuddy's ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/service.proto"},"Build Results API")," - users have programmatic access to an invocation's targets, actions, and build artifacts. This allows teams to build out custom integrations with their existing tooling. If you'd like access to the API, or have more information you'd like exposed, email ",Object(o.b)("a",{parentName:"p",href:"https://buildbuddy.io/blog/buildbuddy-v1-0-6-release-notes/developers@buildbuddy.io"},"developers@buildbuddy.io"),"."))),Object(o.b)("p",null,"That's it for this release. Stay tuned for more updates coming soon!"),Object(o.b)("p",null,"As always, we love your feedback - email us at ",Object(o.b)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io")," with any questions, comments, or thoughts."))}s.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),b=s(a),p=r,m=b["".concat(i,".").concat(p)]||b[p]||c[p]||o;return a?n.a.createElement(m,u(u({ref:t},l),{},{components:a})):n.a.createElement(m,u({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);