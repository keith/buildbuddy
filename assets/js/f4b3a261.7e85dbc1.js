"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3586],{62391:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=r(74848),s=r(28453);const i={id:"enterprise-rbe",title:"Enterprise RBE Setup",sidebar_label:"Enterprise RBE Setup"},o=void 0,l={id:"enterprise-rbe",title:"Enterprise RBE Setup",description:"To deploy BuildBuddy Remote Build Execution on-prem, we recommend using the BuildBuddy Enterprise Helm charts.",source:"@site/../docs/enterprise-rbe.md",sourceDirName:".",slug:"/enterprise-rbe",permalink:"/docs/enterprise-rbe",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-rbe.md",tags:[],version:"current",lastUpdatedBy:"George Li",lastUpdatedAt:1730228714e3,frontMatter:{id:"enterprise-rbe",title:"Enterprise RBE Setup",sidebar_label:"Enterprise RBE Setup"},sidebar:"someSidebar",previous:{title:"Enterprise Helm Charts",permalink:"/docs/enterprise-helm"},next:{title:"Enterprise Mac RBE Setup",permalink:"/docs/enterprise-mac-rbe"}},d={},a=[{value:"Installing the chart",id:"installing-the-chart",level:2},{value:"Configuring your install",id:"configuring-your-install",level:2},{value:"Configuring resources",id:"configuring-resources",level:2},{value:"More configuration",id:"more-configuration",level:2},{value:"Writing deployment to a file",id:"writing-deployment-to-a-file",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To deploy BuildBuddy Remote Build Execution on-prem, we recommend using the ",(0,t.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise",children:"BuildBuddy Enterprise Helm charts"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-chart",children:"Installing the chart"}),"\n",(0,t.jsx)(n.p,{children:"First add the BuildBuddy Helm repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add buildbuddy https://helm.buildbuddy.io\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then you'll need to make sure kubectl is configured with access to your Kubernetes cluster. Here are instructions for ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl",children:"Google Cloud"}),", ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html",children:"AWS"}),", and ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough#connect-to-the-cluster",children:"Azure"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Finally install BuildBuddy enterprise to your Kubernetes cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install buildbuddy buildbuddy/buildbuddy-enterprise\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will deploy a minimal BuildBuddy enterprise install to your Kubernetes cluster."}),"\n",(0,t.jsx)(n.p,{children:"You can verify your install by waiting a minute or two for your deployment to complete, then running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo `kubectl get --namespace default service buildbuddy-enterprise -o jsonpath='{.status.loadBalancer.ingress[0].*}'`\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will return an IP address that you can visit in a browser and verify that you install was successful. The basic deployment doesn't configure RBE, so you'll only see options for BES and Cache endpoints."}),"\n",(0,t.jsx)(n.h2,{id:"configuring-your-install",children:"Configuring your install"}),"\n",(0,t.jsx)(n.p,{children:"Now that you have a basic BuildBuddy Enterprise install deployed. Let's configure it to enable Remote Build Execution."}),"\n",(0,t.jsxs)(n.p,{children:["You can do so this by passing a ",(0,t.jsx)(n.code,{children:"values.yaml"})," file to Helm that enables RBE. Here's a simple ",(0,t.jsx)(n.code,{children:"values.yaml"})," file with RBE enabled. This will deploy RBE with 3 executors and Redis enabled:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"executor:\n  enabled: true\n  replicas: 3\nredis:\n  enabled: true\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n"})}),"\n",(0,t.jsx)(n.p,{children:"This configuration with 1 app instance, 3 executors, and a Redis instance will fit on a machine/cluster with at least 5 vCPUs and 24 GB of RAM."}),"\n",(0,t.jsxs)(n.p,{children:["GCP's ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/machine-types#n2_standard_machine_types",children:"n2-standard-8 machines"})," or similar are a good place to start. For information on scaling up and down your deployments, see the ",(0,t.jsx)(n.strong,{children:"Configuring resource"})," section."]}),"\n",(0,t.jsx)(n.p,{children:"You can now upgrade your install with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm upgrade buildbuddy buildbuddy/buildbuddy-enterprise --values values.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once your upgrade has completed (and the rollout has finished), you can reload the IP address you obtained from the kubectl command above."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo `kubectl get --namespace default service buildbuddy-enterprise -o jsonpath='{.status.loadBalancer.ingress[0].*}'`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You should now see a remote build execution checkbox and can try your first remote build execution. Make sure your RBE ",(0,t.jsx)(n.a,{href:"/docs/rbe-setup",children:"toolchains and platforms"})," are correctly configured."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-resources",children:"Configuring resources"}),"\n",(0,t.jsx)(n.p,{children:"Now that you've got a working RBE deployment, you can configure resources requested by BuildBuddy app instances and executors to scale up and down your cluster."}),"\n",(0,t.jsx)(n.p,{children:"By default BuildBuddy app instances request 1 CPU and 4 GB of RAM, executors request 1 CPU and 5 GB of RAM per instance, and Redis requests 1 CPU and 5GB of RAM."}),"\n",(0,t.jsx)(n.p,{children:"Here's a values.yaml file that specifies the replica and resource settings you can use to scale your cluster up and down:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'replicas: 1\nresources:\n  limits:\n    cpu: "2"\n    memory: "8Gi"\n  requests:\n    cpu: "1"\n    memory: "4Gi"\nexecutor:\n  enabled: true\n  replicas: 3\n  resources:\n    limits:\n      cpu: "2"\n      memory: "10Gi"\n    requests:\n      cpu: "1"\n      memory: "5Gi"\nredis:\n  enabled: true\n  resources:\n    limits:\n      cpu: "1"\n      memory: "6Gi"\n    requests:\n      cpu: "1"\n      memory: "5Gi"\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note: if you scale beyond one app replica, make sure you're using MySQL instead of SQLite, and GCS/S3 instead of disk storage. For information on how to configure these, see the ",(0,t.jsx)(n.a,{href:"/docs/enterprise-config",children:"enterprise configuration guide"}),". Scaling the number of executor replicas does not have these requirements."]}),"\n",(0,t.jsx)(n.p,{children:"The default values support both memory hungry Java tests and CPU-intensive Tensorflow builds. Fine tuning these parameters for peak performance depends a lot on your workload, and we're happy to help."}),"\n",(0,t.jsxs)(n.p,{children:["For a full overview of what can be configured via our enterprise Helm charts, see the ",(0,t.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-enterprise/values.yaml",children:"buildbuddy-enterprise values.yaml file"}),", and the ",(0,t.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-executor/values.yaml",children:"buildbuddy-executor values.yaml file"}),". Values for the executor deployment are nested in the ",(0,t.jsx)(n.code,{children:"executor:"})," block of the buildbuddy-enterprise yaml file."]}),"\n",(0,t.jsx)(n.h2,{id:"more-configuration",children:"More configuration"}),"\n",(0,t.jsxs)(n.p,{children:["For more configuration options beyond RBE, like authentication and storage options, see our ",(0,t.jsx)(n.a,{href:"/docs/config",children:"configuration docs"})," and our ",(0,t.jsx)(n.a,{href:"/docs/enterprise-config",children:"enterprise configuration guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"writing-deployment-to-a-file",children:"Writing deployment to a file"}),"\n",(0,t.jsx)(n.p,{children:"If you don't want to use Helm, you can write your Kubernetes deployment configuration to a file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ helm template buildbuddy buildbuddy/buildbuddy-enterprise > buildbuddy-deploy.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can then check this configuration in to your source repository, or manually apply it to your cluster with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f buildbuddy-deploy.yaml\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);