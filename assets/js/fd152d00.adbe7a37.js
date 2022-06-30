/*! For license information please see fd152d00.adbe7a37.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[98],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var c,u,a=o(e),l=1;l<arguments.length;l++){for(var f in c=Object(arguments[l]))r.call(c,f)&&(a[f]=c[f]);if(t){u=t(c);for(var p=0;p<u.length;p++)n.call(c,u[p])&&(a[u[p]]=c[u[p]])}}return a}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var k=j.prototype=new O;k.constructor=j,n(k,w.prototype),k.isPureReactComponent=!0;var S={current:null},P=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,$=[];function D(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function U(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case c:u=!0}}if(u)return r(n,e,""===t?"."+B(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+B(o=e[a],a);u+=U(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)u+=U(o=o.value,l=t+B(o,a++),r,n);else if("object"===o)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function A(e,t,r){return null==e?0:U(e,"",t,r)}function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(C,"$&/")+"/"),A(e,q,t=D(t,i,n,o)),T(t)}var R={current:null};function N(){var e=R.current;if(null===e)throw Error(v(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,y=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return r?n.createElement(y,c(c({ref:t},f),{},{components:r})):n.createElement(y,c({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=s;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4e3:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return f},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7378),r(4137)),c=["components"],u={id:"architecture-build-event-write",title:"Life of a Build Event Write",sidebar_label:"Life of a Build Event\xa0Write"},a=void 0,l={unversionedId:"architecture-build-event-write",id:"architecture-build-event-write",title:"Life of a Build Event Write",description:"",source:"@site/../docs/architecture-build-event-write.md",sourceDirName:".",slug:"/architecture-build-event-write",permalink:"/docs/architecture-build-event-write",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/architecture-build-event-write.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1639759702,formattedLastUpdatedAt:"12/17/2021",frontMatter:{id:"architecture-build-event-write",title:"Life of a Build Event Write",sidebar_label:"Life of a Build Event\xa0Write"},sidebar:"someSidebar",previous:{title:"Data Storage Overview",permalink:"/docs/architecture-data-storage"},next:{title:"Life of a Build Event\xa0Read",permalink:"/docs/architecture-build-event-read"}},f=[],p={toc:f};function s(e){var t=e.components,u=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(9335).Z})))}s.isMDXComponent=!0},9335:function(e,t,r){t.Z=r.p+"assets/images/architecture-build-event-write-177bcb8c17d4c046512d83b921af3487.png"}}]);