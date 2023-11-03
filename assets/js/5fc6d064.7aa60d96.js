"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9645],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=i,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97452:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],o={id:"config-auth",title:"Auth Configuration",sidebar_label:"Auth"},p=void 0,d={unversionedId:"config-auth",id:"config-auth",title:"Auth Configuration",description:"Auth is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-auth.md",sourceDirName:".",slug:"/config-auth",permalink:"/docs/config-auth",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-auth.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1699043009,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{id:"config-auth",title:"Auth Configuration",sidebar_label:"Auth"},sidebar:"someSidebar",previous:{title:"SSL",permalink:"/docs/config-ssl"},next:{title:"Integrations",permalink:"/docs/config-integrations"}},u={},s=[{value:"OIDC",id:"oidc",level:2},{value:"Section",id:"section",level:3},{value:"Options",id:"options",level:3},{value:"Redirect URL",id:"redirect-url",level:3},{value:"OIDC Examples",id:"oidc-examples",level:3},{value:"Google auth provider",id:"google-auth-provider",level:4},{value:"Gitlab auth provider",id:"gitlab-auth-provider",level:4},{value:"Azure AD provider",id:"azure-ad-provider",level:4},{value:"SAML 2.0",id:"saml-20",level:2},{value:"Setup",id:"setup",level:3},{value:"SAML 2.0 Examples",id:"saml-20-examples",level:3},{value:"Okta SAML provider",id:"okta-saml-provider",level:4},{value:"Azure AD / Entra SAML provider",id:"azure-ad--entra-saml-provider",level:4}],m={toc:s},c="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Auth is only configurable in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy."),(0,r.kt)("h2",{id:"oidc"},"OIDC"),(0,r.kt)("h3",{id:"section"},"Section"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"auth:")," The Auth section enables BuildBuddy authentication using an OpenID Connect provider that you specify. ",(0,r.kt)("strong",{parentName:"p"},"Optional")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oauth_providers:")," A list of configured OAuth Providers.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"issuer_url: ")," The issuer URL of this OIDC Provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_id: ")," The oauth client ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_secret: ")," The oauth client secret."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable_anonymous_usage:")," If true, unauthenticated build uploads will still be allowed but won't be associated with your organization.")),(0,r.kt)("h3",{id:"redirect-url"},"Redirect URL"),(0,r.kt)("p",null,"If during your OpenID provider configuration you're asked to enter a ",(0,r.kt)("strong",{parentName:"p"},"Redirect URL"),", you should enter ",(0,r.kt)("inlineCode",{parentName:"p"},"https://YOUR_BUILDBUDDY_URL/auth/"),". For example if your BuildBuddy instance was hosted on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://buildbuddy.acme.com"),", you'd enter ",(0,r.kt)("inlineCode",{parentName:"p"},"https://buildbuddy.acme.com/auth/")," as your redirect url."),(0,r.kt)("h3",{id:"oidc-examples"},"OIDC Examples"),(0,r.kt)("h4",{id:"google-auth-provider"},"Google auth provider"),(0,r.kt)("p",null,"If you'd like to use Google as an auth provider, you can easily obtain your client id and client secret ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "12345678911-f1r0phjnhbabcdefm32etnia21keeg31.apps.googleusercontent.com"\n      client_secret: "sEcRetKeYgOeShErE"\n')),(0,r.kt)("h4",{id:"gitlab-auth-provider"},"Gitlab auth provider"),(0,r.kt)("p",null,"You can use Gitlab as an OIDC identity provider for BuildBuddy.\nThis feature is available for both Gitlab On-Prem Deployment and Gitlab SaaS offering."),(0,r.kt)("p",null,"For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/integration/openid_connect_provider.html"},"Gitlab's latest Official Documentation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Because ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/gitlab/-/issues/16620"},"Gitlab has yet to support refresh tokens"),", you need to configure BuildBuddy to not request the ",(0,r.kt)("inlineCode",{parentName:"p"},"offline_access")," scope from Gitlab:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"auth:\n  disable_refresh_token: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuration"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, register an Application on Gitlab side:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For Gitlab SaaS, follow ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#create-a-group-owned-application"},"Group-Owned Application Documentation")," instructions."),(0,r.kt)("li",{parentName:"ul"},"For Gitlab On-Prem, follow ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#create-a-group-owned-application"},"Instance-Wide Application Documentation")," instructions."))),(0,r.kt)("li",{parentName:"ul"},"The Redirect URL should be ",(0,r.kt)("inlineCode",{parentName:"li"},"https://YOUR_BUILDBUDDY_URL/auth/"),", pointing to your existing BuildBuddydeployment."),(0,r.kt)("li",{parentName:"ul"},"The scopes needed are ",(0,r.kt)("inlineCode",{parentName:"li"},"openid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"profile")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),".")),(0,r.kt)("p",null,"Once the Gitlab application is created, you can configure it as a BuildBuddy auth provider like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://gitlab.com"\n      client_id: "<GITLAB APPLICATION ID>"\n      client_secret: "<GITLAB APPLICATION SECRET>"\n')),(0,r.kt)("h4",{id:"azure-ad-provider"},"Azure AD provider"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure Portal"),".\nIn case multiple Azure AD tenants is available, and select the tenant that will be using BuildBuddy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register a BuildBuddy application:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Search for and select Azure Active Directory"),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Manage"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"App registration")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"New registration")),(0,r.kt)("li",{parentName:"ul"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"BuildBuddy")," for application name."),(0,r.kt)("li",{parentName:"ul"},"Select types of account in Azure AD that should have access to BuildBuddy.\nUsually ",(0,r.kt)("inlineCode",{parentName:"li"},"Accounts in this organizational directory only"),' is correct for single-tenant use case,\n"Accounts in any organizational directory" is correct for multiple-tenants use case.'),(0,r.kt)("li",{parentName:"ul"},"Redirect URI should be ",(0,r.kt)("inlineCode",{parentName:"li"},"https://YOUR_BUILDBUDDY_URL/auth/")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Web")," platform."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Register")),(0,r.kt)("li",{parentName:"ul"},'Take note of "Application (client) ID" and ',(0,r.kt)("inlineCode",{parentName:"li"},"Directory (tenant) ID"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure Application Secret"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Certificates & secrets")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Client secrets")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"New client secret"),"\nWe recommend set the expiry date of the secret to 12 months."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add")," -> Take note of ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," of the newly created secret."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure Application API scope"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"API permissions")),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Add a permission")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft Graph")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Delegated permission")),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"OpenId permissions"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"offline_access"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"openid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"profile"),"."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"User"),", select ",(0,r.kt)("inlineCode",{parentName:"li"},"User.Read")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add permissions")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After that, your BuildBuddy config should be like this"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://login.microsoftonline.com/<DIRECTORY_ID>/v2.0"\n      client_id: "<CLIENT_ID>"\n      client_secret: "<CLIENT_SECRET>"\n')))),(0,r.kt)("h2",{id:"saml-20"},"SAML 2.0"),(0,r.kt)("p",null,"SAML 2.0 authentication is avaliable for BuildBuddy Cloud (SaaS) version."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Organizations' admins should configure a BuildBuddy application in their SAML 2.0 Credential Provider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find the short name (slug) of your organization in ",(0,r.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/settings/"},"Organizations Settings"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Assertion Consumer Service(ACS) URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://app.buildbuddy.io/auth/saml/acs/?slug=<org-slug>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Audience URL (SP Entity ID)"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://app.buildbuddy.io/saml/metadata/?slug=<org-slug>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sign on URL")," (for IdP-initiated login): ",(0,r.kt)("inlineCode",{parentName:"p"},"https://app.buildbuddy.io/login/?slug=<org-slug>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure the application ",(0,r.kt)("strong",{parentName:"p"},"Attribute Statement")," with a field name ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," and it's value mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"user.email")," (or equivalent)."))),(0,r.kt)("p",null,"Once the app is created, organizations' admins could share the ",(0,r.kt)("strong",{parentName:"p"},"Identity Provider Metadata")," URL with BuildBuddy's support to\nget the organization SAML configured accordingly."),(0,r.kt)("h3",{id:"saml-20-examples"},"SAML 2.0 Examples"),(0,r.kt)("h4",{id:"okta-saml-provider"},"Okta SAML provider"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From Okta Website, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create App Integration"),", select ",(0,r.kt)("inlineCode",{parentName:"p"},"SAML 2.0"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildBuddy")," and hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in ",(0,r.kt)("inlineCode",{parentName:"p"},"Single sign on URL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Audience URI")," as above instruction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add an ",(0,r.kt)("inlineCode",{parentName:"p"},"Attribute Statement")," to map ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," and value ",(0,r.kt)("inlineCode",{parentName:"p"},"user.email"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity Provider Metadata")," link and share the URL (should have this format ",(0,r.kt)("inlineCode",{parentName:"p"},"https://xxxx.okta.com/app/XXXX/sso/saml/metadata"),") with BuildBuddy support."))),(0,r.kt)("h4",{id:"azure-ad--entra-saml-provider"},"Azure AD / Entra SAML provider"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://entra.microsoft.com/"},"Entra portal page"),", navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Applications")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Enterprise applications"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"New application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Azure AD SAML Toolkit")," and select it. Change the name to ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildBuddy")," and hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the newly created appliction view, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Single sign-on")," and select ",(0,r.kt)("inlineCode",{parentName:"p"},"SAML"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," in the first section ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic SAML Configuration"),"."),(0,r.kt)("p",{parentName:"li"},"a. ",(0,r.kt)("inlineCode",{parentName:"p"},"Identified (Entity ID)")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://app.buildbuddy.io/saml/metadata?slug=<org-slug>"),"."),(0,r.kt)("p",{parentName:"li"},"b. ",(0,r.kt)("inlineCode",{parentName:"p"},"Reply URL (Assertion Consumer Service URL)")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://app.buildbuddy.io/auth/saml/acs/?slug=<org-slug>"),"."),(0,r.kt)("p",{parentName:"li"},"c. ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign on URL")," should be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://app.buildbuddy.io/login/?slug=<org-slug>"),"."),(0,r.kt)("p",{parentName:"li"},"d. Hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," in the second section ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes & Claims"),"."),(0,r.kt)("p",{parentName:"li"},"a. Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Add new claim"),"."),(0,r.kt)("p",{parentName:"li"},"b. For ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", fill in ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"."),(0,r.kt)("p",{parentName:"li"},"c. For ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," select ",(0,r.kt)("inlineCode",{parentName:"p"},"Attribute")," and for ",(0,r.kt)("inlineCode",{parentName:"p"},"Source attribute"),", search and select ",(0,r.kt)("inlineCode",{parentName:"p"},"user.mail"),"."),(0,r.kt)("p",{parentName:"li"},"d. Hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the 3rd section ",(0,r.kt)("inlineCode",{parentName:"p"},"SAML Certificates"),", copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"App Federation Metadata Url")," and share it with BuildBuddy support."))))}k.isMDXComponent=!0}}]);