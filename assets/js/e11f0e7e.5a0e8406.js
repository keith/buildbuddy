"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[451],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=i,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={id:"cache-encryption-keys",title:"Customer-managed Encryption Keys",sidebar_label:"Customer-managed Encryption Keys"},c=void 0,l={unversionedId:"cache-encryption-keys",id:"cache-encryption-keys",title:"Customer-managed Encryption Keys",description:"BuildBuddy allows you to provide a managed key to be used to encrypt cache artifacts at rest.",source:"@site/../docs/cache-encryption-keys.md",sourceDirName:".",slug:"/cache-encryption-keys",permalink:"/docs/cache-encryption-keys",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cache-encryption-keys.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1699043009,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{id:"cache-encryption-keys",title:"Customer-managed Encryption Keys",sidebar_label:"Customer-managed Encryption Keys"},sidebar:"someSidebar",previous:{title:"Build Metadata Guide",permalink:"/docs/guide-metadata"},next:{title:"Remote Build Execution",permalink:"/docs/remote-build-execution"}},d={},u=[{value:"Key permissions",id:"key-permissions",level:2},{value:"Google Cloud Platform (GCP)",id:"google-cloud-platform-gcp",level:3},{value:"Amazon Web Services (AWS)",id:"amazon-web-services-aws",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Key management",id:"key-management",level:3},{value:"Content encryption and decryption",id:"content-encryption-and-decryption",level:3}],p={toc:u},y="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(y,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BuildBuddy allows you to provide a managed key to be used to encrypt cache artifacts at rest."),(0,o.kt)("p",null,"BuildBuddy currently supports encryption keys stored in Google Cloud Platform (GCP) KMS or Amazon Web Services (AWS) KMS."),(0,o.kt)("p",null,'To get started, open the organization settings page and navigate to the "Encryption keys" tab.'),(0,o.kt)("p",null,"Only organization administrators may change the encryption settings."),(0,o.kt)("h2",{id:"key-permissions"},"Key permissions"),(0,o.kt)("h3",{id:"google-cloud-platform-gcp"},"Google Cloud Platform (GCP)"),(0,o.kt)("p",null,"BuildBuddy infrastructure will access the supplied key using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kms-prod@flame-build.iam.gserviceaccount.com"),"\nservice account. You must grant this service account permissions to use the supplied key. At a minimum, the service\naccount must be granted both of the following IAM permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cloudkms.cryptoKeyVersions.useToEncrypt\ncloudkms.cryptoKeyVersions.useToDecrypt\n")),(0,o.kt)("p",null,"These permissions are available as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloud KMS CryptoKey Encrypter/Decrypter")," predefined IAM role."),(0,o.kt)("h3",{id:"amazon-web-services-aws"},"Amazon Web Services (AWS)"),(0,o.kt)("p",null,"BuildBuddy infrastructure will access the supplied key using a BuildBuddy owned user in account ",(0,o.kt)("inlineCode",{parentName:"p"},"561871016185"),". You must\ngrant this AWS account access to the supplied key."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'When enabling or disabling customer-managed encryption keys, it may take up to 10 minutes for the change to propagate\nthrough the system. If there are active builds during this window, they may experience "not found" errors while the\nchange propagates.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Artifacts written prior to enabling this feature will not be retroactively encrypted using the new key, but will\nbecome effectively inaccessible and will be evicted from the cache as part of the regular cache lifecycle.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The key used for encryption and decryption may be cached in memory by the BuildBuddy infrastructure for up to 10\nminutes for performance reasons.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The customer-managed key may be rotated. During rotation, the old key material must remain accessible for at least 24\nhours."))),(0,o.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,o.kt)("h3",{id:"key-management"},"Key management"),(0,o.kt)("p",null,'When the feature is enabled, two internal 256-bit keys are generated by BuildBuddy. The first being the "Customer Key"\nand the second being the "BuildBuddy Key". Before being stored within BuildBuddy systems, the Customer Key is encrypted\nusing the customer supplied key and the BuildBuddy Key is encrypted using a BuildBuddy managed key.'),(0,o.kt)("p",null,'To perform encryption or decryption, a third 256-bit key ("Derived Key") is obtained by decrypting the Customer Key and\nthe BuildBuddy key and feeding their concatenation into HKDF-Expand using a SHA256 hash.'),(0,o.kt)("p",null,"During operation, the Derived Key may be cached in memory by BuildBuddy systems for up to 10 minutes for performance\nreasons."),(0,o.kt)("p",null,"If the feature is disabled, the Customer Key and BuildBuddy Key material are immediately deleted. Previously encrypted\ndata will no longer be decryptable after 10 minutes at most, due to temporary in-memory key caching."),(0,o.kt)("h3",{id:"content-encryption-and-decryption"},"Content encryption and decryption"),(0,o.kt)("p",null,"The Derived Key is used to encrypt and decrypt content using the XChaCha20-Poly1305 algorithm."))}m.isMDXComponent=!0}}]);