"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4408],{73348:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=o(74848),a=o(28453);const s={slug:"distributed-scheduling-for-faster-builds",title:"Distributed Scheduling for Faster Builds",description:"The distributed scheduler that powers BuildBuddy remote execution",author:"Tyler Williams",author_title:"Co-founder @ BuildBuddy",date:"2022-04-07:08:00:00",author_url:"https://www.linkedin.com/in/tyler-williams-80480519b/",author_image_url:"https://avatars.githubusercontent.com/u/141737?v=4",image:"/img/distributed-scheduling.png",tags:["engineering","go","sparrow","scheduler"]},n=void 0,r={permalink:"/blog/distributed-scheduling-for-faster-builds",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/distributed-scheduling-for-faster-builds.md",source:"@site/blog/distributed-scheduling-for-faster-builds.md",title:"Distributed Scheduling for Faster Builds",description:"The distributed scheduler that powers BuildBuddy remote execution",date:"2022-04-07T08:00:00.000Z",formattedDate:"April 7, 2022",tags:[{label:"engineering",permalink:"/blog/tags/engineering"},{label:"go",permalink:"/blog/tags/go"},{label:"sparrow",permalink:"/blog/tags/sparrow"},{label:"scheduler",permalink:"/blog/tags/scheduler"}],readingTime:6.145,hasTruncateMarker:!0,authors:[{name:"Tyler Williams",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/tyler-williams-80480519b/",imageURL:"https://avatars.githubusercontent.com/u/141737?v=4"}],frontMatter:{slug:"distributed-scheduling-for-faster-builds",title:"Distributed Scheduling for Faster Builds",description:"The distributed scheduler that powers BuildBuddy remote execution",author:"Tyler Williams",author_title:"Co-founder @ BuildBuddy",date:"2022-04-07:08:00:00",author_url:"https://www.linkedin.com/in/tyler-williams-80480519b/",author_image_url:"https://avatars.githubusercontent.com/u/141737?v=4",image:"/img/distributed-scheduling.png",tags:["engineering","go","sparrow","scheduler"]},unlisted:!1,prevItem:{title:"Bazel Remote Cache Debugging",permalink:"/blog/bazel-remote-cache-debugging"},nextItem:{title:"Meet rules_xcodeproj",permalink:"/blog/meet-rules_xcodeproj"}},l={authorsImageUrls:[void 0]},d=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Let's start with \"what's BuildBuddy\" for the kids in back. In short, we provide a UI, distributed cache, and remote execution platform for your Bazel builds. That means we securely compile your code, cache the artifacts, and help you visualize the results. We make it possible to build projects like Tensorflow from your laptop in under 5 minutes instead of 90 minutes."}),"\n",(0,i.jsx)(t.p,{children:"Obviously to do all this, we have to handle some thorny engineering challenges, one of which is scheduling remote executions. For that, we have a scheduler. The scheduler just matches actions (basically jobs) received by our API to remote workers that actually do the work. If you think of a full build of something like Tensorflow as a 10 course meal, a single action is like a recipe for a tiny part of that meal. To make it easier to visualize, here's a real action from building BuildBuddy:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'# this action just uses gcc to compile zlib/infback.c into an object file, zlib/infback.o\n/usr/bin/gcc -U_FORTIFY_SOURCE -fstack-protector -Wall -Wunused-but-set-parameter \\\n  -Wno-free-nonheap-object -fno-omit-frame-pointer -g0 -O2 -D_FORTIFY_SOURCE=1 \\\n  -DNDEBUG -ffunction-sections -fdata-sections -MD -MF \\\n  bazel-out/k8-opt-exec-34F00540/bin/external/zlib/_objs/zlib/infback.d \\\n  -frandom-seed=bazel-out/k8-opt-exec-34F00540/bin/external/zlib/_objs/zlib/infback.o \\\n  -iquote external/zlib -iquote bazel-out/k8-opt-exec-34F00540/bin/external/zlib \\\n  -isystem external/zlib/zlib/include \\\n  -isystem bazel-out/k8-opt-exec-34F00540/bin/external/zlib/zlib/include -g0 \\\n  -Wno-unused-variable -Wno-implicit-function-declaration -fno-canonical-system-headers \\\n  -Wno-builtin-macro-redefined -D__DATE__="redacted" -D__TIMESTAMP__="redacted" \\\n  -D__TIME__="redacted" -c external/zlib/infback.c -o \\\n  bazel-out/k8-opt-exec-34F00540/bin/external/zlib/_objs/zlib/infback.o\n'})}),"\n",(0,i.jsx)(t.p,{children:"And here's another:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# this action uses protobufjs to generate typescript bindings for a protobuf file\nbazel-out/host/bin/external/npm/protobufjs/bin/pbts.sh\n--out=bazel-out/k8-fastbuild/bin/proto/buildbuddy_service_ts_proto.d.ts\nbazel-out/k8-fastbuild/bin/proto/buildbuddy_service_ts_proto.js\n--bazel_node_modules_manifest=bazel-out/k8-fastbuild/bin/proto/__buildbuddy_service_ts_proto_pbts.module_mappings.json\n"})}),"\n",(0,i.jsx)(t.p,{children:"So you get the idea, building a binary involves compiling and linking many different libraries etc and a single action is usually one of those commands. Great."}),"\n",(0,i.jsxs)(t.p,{children:["So let's say we have hundreds or thousands of these actions hitting our API at a time, and a pool of remote workers ready to run them. Let's get to it. If you're like me, your first thought here is ",(0,i.jsx)(t.em,{children:"load balancer"}),". I mean, why not? These are just requests that need to get to a pool of machines, and load balancers are a really common, well understood way to do this."]}),"\n",(0,i.jsx)(t.p,{children:"In the very early days, this is what we did. We ran nginx in front of a pool of executors. And it kind of worked! But the results were... lumpy. In a typical web application, most requests served by load balancers are pretty homogeneous. They are static file lookups or simple page actions that all usually take under a second to serve. But our requests were very heterogenous: the fastest ones were simple gcc compile commands that generated a single object file and could finish in 10s of milliseconds. The slowest ones were gigantic slow link statements that required every single object file and took 30+ seconds to link. Or even worse, test actions that ran a unit test binary and took 30+ minutes to run."}),"\n",(0,i.jsx)(t.p,{children:"What happened is that the load balancer would assign tasks in a round robin fashion and put two large tasks on the same worker, while other workers were sitting there idle, and the build would take much longer than it should."}),"\n",(0,i.jsx)(t.p,{children:"I should mention that I really wanted this to work, because I didn't want to write a scheduler. It seemed complex and risky. I would much rather use something simple and well tested than build a custom critical piece of infrastructure like a scheduler. In fact I went through all kinds of machinations to avoid doing this, from using different load balancing techniques like least loaded or exponential weighted moving average (EWMA) to trying to split the work into multiple load balancer targets, to using the Kubernetes scheduler."}),"\n",(0,i.jsx)(t.p,{children:"And in the end, nothing worked well. The core reason a load balancer was such a poor fit here is that it didn't know the size of the requests it was routing. It seemed possible to give the load balancer some hints about this, but it would have meant writing our own load balancing algorithm, or relying on a very complex routing configuration. Neither option sounded appealing, and both negated my whole rationale for using a load balancer in the first place, namely that they are fast and easy."}),"\n",(0,i.jsxs)(t.p,{children:["So I went and did some reading about schedulers, and found this really lovely paper ",(0,i.jsx)(t.a,{href:"https://cs.stanford.edu/~matei/papers/2013/sosp_sparrow.pdf",children:"https://cs.stanford.edu/~matei/papers/2013/sosp_sparrow.pdf"})," about a distributed scheduler called Sparrow. This paper is great because it's short and clearly written, and it talks about some cool ideas. The biggest idea is the power of two choices."]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.eecs.harvard.edu/~michaelm/postscripts/mythesis.pdf",children:"The Power of Two Choices in Randomized Load Balancing"})}),(0,i.jsx)(t.p,{children:"In a typical load balancer, some metrics are kept about how loaded a worker is based on how long it takes to serve a request, and then the load balancer uses those metrics to decide where to assign new requests. The metrics are stale though, being based on past requests, which leads to some non-optimal behavior. A better way to assign requests is just to pick two random workers and assign to the least loaded of the two. This leads to an exponential improvement in the maximum load."})]}),"\n",(0,i.jsx)(t.p,{children:"Sparrow modifies two-choices slightly, and also introduces the idea of Late-Binding. In many schedulers, each worker maintains a queue and the scheduler tries to assign work to the worker with the shortest queue. The problem with this, and one of the core reasons it doesn't give good performance on our workloads, is that queue length is not a good indicator of how long a task will take. Late-binding solves this by enqueuing a task on multiple workers, and then the first worker to get to the task takes it. This effectively avoids the problems of huge single tasks blocking other work."}),"\n",(0,i.jsx)(t.p,{children:"Another reason this paper is so great is because the authors actually implemented Sparrow, ported Apache Spark to use it, and then analyzed the results. Side note: I wish more papers were like this! So fun to read."}),"\n",(0,i.jsxs)(t.p,{children:["Sparrow is a ",(0,i.jsx)(t.em,{children:"distributed"})," scheduling algorithm, so no single node holds the entire state of the world. This is really important for us at BuildBuddy because we want our infrastructure to be resilient. When an API server or backend worker restarts or goes down, for whatever reason, we don't want it to impact customer builds."]}),"\n",(0,i.jsx)(t.p,{children:"So with this paper as a basis, I went and implemented Sparrow in Go, which was not nearly as hard as I'd made it out to be. It maybe took a few days, which was far less time than I'd spent trying to find alternative solutions. The lead author of the paper was even happy to help clarify things over email. And when I replaced our load balancer with it, the results were pretty much instantly far better than anything we'd had before. No longer were builds timing out because of unequal load distribution. Even better, due to the distributed nature of the algorithm, we could run our workers on cheap preemptible compute machines that are often restarted and not worry about losing tasks. (These machines are less than half the cost!)"}),"\n",(0,i.jsx)(t.p,{children:"We still use this scheduler in production today, and it's working well for us. We've made some modifications to the way requests are routed, but fundamentally this algorithm is the same one in the paper, the same one powering all remote execution on BuildBuddy today."}),"\n",(0,i.jsxs)(t.p,{children:["If you want to learn more about BuildBuddy or try it, check out ",(0,i.jsx)(t.a,{href:"https://www.buildbuddy.io/docs/introduction/",children:"our docs"}),". And if you enjoy this kind of problem solving and engineering work, ",(0,i.jsx)(t.a,{href:"https://www.buildbuddy.io/careers/",children:"we\u2019re hiring"}),"!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>r});var i=o(96540);const a={},s=i.createContext(a);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);