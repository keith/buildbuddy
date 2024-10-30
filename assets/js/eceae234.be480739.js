"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[841],{23980:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=d(74848),i=d(28453);const r={id:"on-prem",title:"On-prem Quickstart",sidebar_label:"On-prem Quickstart"},l=void 0,o={id:"on-prem",title:"On-prem Quickstart",description:"BuildBuddy is designed to be easy to run on-premise for those use cases where data absolutely must not leave a company's servers. It can be run your own servers, or in your own cloud environment. It supports major cloud providers like GCP, AWS, and Azure.",source:"@site/../docs/on-prem.md",sourceDirName:".",slug:"/on-prem",permalink:"/docs/on-prem",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/on-prem.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1730310379e3,frontMatter:{id:"on-prem",title:"On-prem Quickstart",sidebar_label:"On-prem Quickstart"},sidebar:"someSidebar",previous:{title:"Cloud Quickstart",permalink:"/docs/cloud"},next:{title:"Contributing",permalink:"/docs/contributing"}},t={},a=[{value:"Getting started",id:"getting-started",level:2},{value:"Bazel Run",id:"bazel-run",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Custom configuration",id:"custom-configuration",level:3},{value:"Output to yaml file",id:"output-to-yaml-file",level:3},{value:"Number of replicas",id:"number-of-replicas",level:3},{value:"Restart behavior",id:"restart-behavior",level:3},{value:"Enterprise deployment",id:"enterprise-deployment",level:3},{value:"Helm",id:"helm",level:2},{value:"Configuring BuildBuddy",id:"configuring-buildbuddy",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"BuildBuddy is designed to be easy to run on-premise for those use cases where data absolutely must not leave a company's servers. It can be run your own servers, or in your own cloud environment. It supports major cloud providers like GCP, AWS, and Azure."}),"\n",(0,s.jsx)(n.p,{children:"The software itself is open-source and easy to audit."}),"\n",(0,s.jsxs)(n.p,{children:["For companies, we offer an ",(0,s.jsx)(n.a,{href:"/docs/enterprise",children:"Enterprise"})," version of BuildBuddy that contains advanced features like OIDC Auth, API access, and more."]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(n.p,{children:"There are four ways to run BuildBuddy on-prem:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#bazel-run",children:"Bazel Run"}),": get the source and run a simple ",(0,s.jsx)(n.code,{children:"bazel run"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#docker-image",children:"Docker Image"}),": pre-built Docker images running the latest version of BuildBuddy."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#kubernetes",children:"Kubernetes"}),": deploy BuildBuddy to your Kubernetes cluster with a one-line deploy script."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#helm",children:"Helm"}),": deploy BuildBuddy to your Kubernetes cluster with the official BuildBuddy helm charts."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"bazel-run",children:"Bazel Run"}),"\n",(0,s.jsx)(n.p,{children:'The simplest method of running BuildBuddy on your own computer is to download and run it with "bazel run". Doing that is simple:'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Get the source"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git clone "https://github.com/buildbuddy-io/buildbuddy"\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Navigate into the BuildBuddy directory"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd buildbuddy\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Build and run using bazel"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bazel run -c opt server:buildbuddy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using a tool like ",(0,s.jsx)(n.a,{href:"https://github.com/bazelbuild/bazelisk",children:"Bazelisk"})," that respects the repo's ",(0,s.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelversion",children:".bazelversion"})," file."]}),"\n",(0,s.jsx)(n.h2,{id:"docker-image",children:"Docker Image"}),"\n",(0,s.jsxs)(n.p,{children:["We publish a ",(0,s.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," image with every release that contains a pre-configured BuildBuddy."]}),"\n",(0,s.jsx)(n.p,{children:"To run it, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 gcr.io/flame-public/buildbuddy-app-onprem:latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like to pass a custom configuration file to BuildBuddy running in a Docker image - see the ",(0,s.jsx)(n.a,{href:"/docs/config",children:"configuration docs"})," on using Docker's ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/storage/volumes/",children:"-v flag"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,s.jsx)(n.code,{children:"--network=host"})," ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/network/host/",children:"flag"})," to your ",(0,s.jsx)(n.code,{children:"docker run"})," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."]}),"\n",(0,s.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsx)(n.p,{children:'If you run or have access to a Kubernetes cluster, and you have the "kubectl" command configured, we provide a shell script that will deploy BuildBuddy to your cluster, namespaced under the "buildbuddy" namespace.'}),"\n",(0,s.jsxs)(n.p,{children:["This script uses ",(0,s.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/deployment/buildbuddy-app.onprem.yaml",children:"this deployment file"}),", if you want to see the details of what is being configured."]}),"\n",(0,s.jsx)(n.p,{children:"To kick of the Kubernetes deploy, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash k8s_on_prem.sh\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Note: the ",(0,s.jsx)(n.code,{children:"k8s_on_prem.sh"})," script requires ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"kubectl"})," version 1.15"]})," or higher to be installed."]}),"\n",(0,s.jsxs)(n.p,{children:["To pass in a custom ",(0,s.jsx)(n.a,{href:"/docs/config",children:"config file"}),", you can use the ",(0,s.jsx)(n.code,{children:"-config"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash k8s_on_prem.sh -config my-config.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"output-to-yaml-file",children:"Output to yaml file"}),"\n",(0,s.jsxs)(n.p,{children:["By default the ",(0,s.jsx)(n.code,{children:"k8s_on_prem.sh"})," script will use ",(0,s.jsx)(n.code,{children:"kubectl apply"})," to deploy BuildBuddy to your current Kubernetes cluster. If you'd like to output the Kubernetes deployment to a yaml file instead that can be checked in, you can use the ",(0,s.jsx)(n.code,{children:"-out"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash k8s_on_prem.sh -out my-buildbuddy-deployment.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"number-of-replicas",children:"Number of replicas"}),"\n",(0,s.jsxs)(n.p,{children:["By default the ",(0,s.jsx)(n.code,{children:"k8s_on_prem.sh"})," script will deploy a single replica of BuildBuddy. If you've configured a MySQL database, storage, and other options necessary to support multiple replicas, you can increase the number of BuildBuddy replicas to deploy with the ",(0,s.jsx)(n.code,{children:"-replicas"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash k8s_on_prem.sh -replicas 3\n"})}),"\n",(0,s.jsx)(n.h3,{id:"restart-behavior",children:"Restart behavior"}),"\n",(0,s.jsxs)(n.p,{children:["By default the ",(0,s.jsx)(n.code,{children:"k8s_on_prem.sh"})," will restart your BuildBuddy deployment to pick up any changes in your configuration file. This can lead to brief downtime if only one replica is deployed. You can disable this behavior with the ",(0,s.jsx)(n.code,{children:"-norestart"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash k8s_on_prem.sh -norestart\n"})}),"\n",(0,s.jsx)(n.h3,{id:"enterprise-deployment",children:"Enterprise deployment"}),"\n",(0,s.jsxs)(n.p,{children:["If you've obtained a BuildBuddy enterprise license, you deploy enterprise BuildBuddy by specifying the ",(0,s.jsx)(n.code,{children:"-enterprise"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash k8s_on_prem.sh -enterprise\n"})}),"\n",(0,s.jsx)(n.h2,{id:"helm",children:"Helm"}),"\n",(0,s.jsxs)(n.p,{children:["If you run or have access to a Kubernetes cluster and are comfortable with ",(0,s.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."]}),"\n",(0,s.jsx)(n.p,{children:"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, and more."}),"\n",(0,s.jsxs)(n.p,{children:["The official BuildBuddy charts live in our ",(0,s.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"buildbuddy-helm repo"})," and can be added to helm with the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm repo add buildbuddy https://helm.buildbuddy.io\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can the deploy BuildBuddy Open Source with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"helm install buildbuddy buildbuddy/buildbuddy \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n"})}),"\n",(0,s.jsx)(n.p,{children:"For more information on configuring your BuildBuddy Helm deploy, check out the charts themselves:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy",children:"BuildBuddy Open Source"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise",children:"BuildBuddy Enterprise"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-buildbuddy",children:"Configuring BuildBuddy"}),"\n",(0,s.jsxs)(n.p,{children:["For documentation on all BuildBuddy configuration options, check out our ",(0,s.jsx)(n.a,{href:"/docs/config",children:"configuration documentation"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>o});var s=d(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);