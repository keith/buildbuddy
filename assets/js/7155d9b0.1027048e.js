"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4909],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],u={slug:"keyboard-shortcuts",title:"Keyboard Shortcuts in BuildBuddy",description:"We're happy to announce keyboard shortcuts in BuildBuddy.",author:"Iain Macdonald",author_title:"Engineer @ BuildBuddy",date:"2023-05-22:12:00:00",author_url:"https://www.linkedin.com/in/macdonaldi/",author_image_url:"https://avatars.githubusercontent.com/u/455246?v=4",image:"/img/blog/keyboard-shortcuts.png",tags:["product"]},c=void 0,l={permalink:"/blog/keyboard-shortcuts",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/keyboard-shortcuts.md",source:"@site/blog/keyboard-shortcuts.md",title:"Keyboard Shortcuts in BuildBuddy",description:"We're happy to announce keyboard shortcuts in BuildBuddy.",date:"2023-05-22T12:00:00.000Z",formattedDate:"May 22, 2023",tags:[{label:"product",permalink:"/blog/tags/product"}],readingTime:1.07,hasTruncateMarker:!1,authors:[{name:"Iain Macdonald",title:"Engineer @ BuildBuddy",url:"https://www.linkedin.com/in/macdonaldi/",imageURL:"https://avatars.githubusercontent.com/u/455246?v=4"}],frontMatter:{slug:"keyboard-shortcuts",title:"Keyboard Shortcuts in BuildBuddy",description:"We're happy to announce keyboard shortcuts in BuildBuddy.",author:"Iain Macdonald",author_title:"Engineer @ BuildBuddy",date:"2023-05-22:12:00:00",author_url:"https://www.linkedin.com/in/macdonaldi/",author_image_url:"https://avatars.githubusercontent.com/u/455246?v=4",image:"/img/blog/keyboard-shortcuts.png",tags:["product"]},nextItem:{title:"Welcoming Grace Chuang",permalink:"/blog/welcoming-grace-chuang"}},s={authorsImageUrls:[void 0]},d=[],p={toc:d},h="wrapper";function m(e){var t=e.components,u=(0,o.Z)(e,i);return(0,a.kt)(h,(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are lots of small, satisfying moments in the day-to-day lives of software developers. From finding and deleting dead code, to writing tests that pass on the first run (actually), to receiving UX mocks that call for simplifying the frontend code, those little joys are a pleasant treat! We\u2019re excited to share a small new BuildBuddy Build Result UI feature that we think fits into this category: keyboard shortcuts."),(0,a.kt)("p",null,"Keyboard shortcuts can be enabled in the personal preferences menu on the settings page in the app. Once enabled, a help menu explaining the shortcuts can be toggled using ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," to show and ",(0,a.kt)("inlineCode",{parentName:"p"},"Esc")," to hide. There\u2019s also a clickable button to close it just in case\u2026 if only Vim had one too!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(82025).Z,width:"1200",height:"628"})),(0,a.kt)("p",null,"I implemented this feature during a hackathon a couple of months ago and I like how it saves me a second or two on some common tasks in the Build Result UI. My favorite shortcut is ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift-c")," to copy invocation page links. I use it once or twice a day to share a link in Slack along with the confused emoji."),(0,a.kt)("p",null,"We love receiving feedback from customers, if you\u2019re excited about this or have other shortcuts you\u2019d like to see in the UI, hit us up on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io/"},"Slack")," or at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io"),"."))}m.isMDXComponent=!0},82025:function(e,t,n){t.Z=n.p+"assets/images/keyboard-shortcuts-857ff7d1888f514970afce69a06ed4db.png"}}]);