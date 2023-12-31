"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[329],{5953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=n(1527),o=n(7541);const i={},a="Getting Started \ud83d\ude80",l={id:"getting-started/index",title:"Getting Started \ud83d\ude80",description:"What is FlowGen",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/tiwater/flowgen/edit/main/website/docs/getting-started/index.md",tags:[],version:"current",lastUpdatedAt:1704018832,formattedLastUpdatedAt:"Dec 31, 2023",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Concepts",permalink:"/concepts"}},r={},h=[{value:"What is FlowGen",id:"what-is-flowgen",level:2},{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"\ud83d\udd75\ufe0f\u200d\u2642\ufe0f Agent",id:"\ufe0f\ufe0f-agent",level:3},{value:"\ud83c\udf0a Autoflow",id:"-autoflow",level:3},{value:"\ud83d\udcc4 AutoflowTemplate",id:"-autoflowtemplate",level:3},{value:"\ud83d\udcac Chat",id:"-chat",level:3},{value:"&quot;Hello World&quot;",id:"hello-world",level:2},{value:"Initialize a New Autoflow",id:"initialize-a-new-autoflow",level:3},{value:"Build Your First Autoflow",id:"build-your-first-autoflow",level:3},{value:"Start Chat",id:"start-chat",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"More Readings",id:"more-readings",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started-",children:"Getting Started \ud83d\ude80"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-flowgen",children:"What is FlowGen"}),"\n",(0,s.jsxs)(t.p,{children:["FlowGen is a tool built for ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/autogen/",children:"AutoGen"}),", a fantastic agent framework from Microsoft Research."]}),"\n",(0,s.jsx)(t.p,{children:"AutoGen streamlines the process of creating multi-agent applications with its clear and user-friendly approach. FlowGen takes this accessibility a step further by offering visual tools that simplify the building and management of agent workflows."}),"\n",(0,s.jsx)(t.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,s.jsx)(t.h3,{id:"\ufe0f\ufe0f-agent",children:"\ud83d\udd75\ufe0f\u200d\u2642\ufe0f Agent"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Agent"})," is the core concept in AutoGen and FlowGen. For applications, this usually means a ",(0,s.jsx)(t.code,{children:"ConversableAgent"}),", which includes two types: ",(0,s.jsx)(t.code,{children:"AssistantAgent"})," and ",(0,s.jsx)(t.code,{children:"UserProxyAgent"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc69\u200d\ud83d\udcbc ",(0,s.jsx)(t.strong,{children:"Assistant Agent"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AssistantAgent"})," is your go-to helper to accomplish a task\u2014it could be a chatbot, a code generator, or a planner\u2014perhaps even a blend of them."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\ud83e\uddd1\u200d\ud83d\udcbb ",(0,s.jsx)(t.strong,{children:"UserProxy Agent"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"UserProxyAgent"})," enables interaction with the ",(0,s.jsx)(t.code,{children:"AssistantAgent"}),". It can take the form of a chatbot, a code executor, or even a human\u2014it's quite the versatile agent."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"-autoflow",children:"\ud83c\udf0a Autoflow"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"Autoflow"})," consists of a network of ",(0,s.jsx)(t.code,{children:"Agents"}),". It's the foundation of any multi-agent application."]}),"\n",(0,s.jsxs)(t.p,{children:["A standard Autoflow usually includes one ",(0,s.jsx)(t.code,{children:"UserProxyAgent"})," and one or several ",(0,s.jsx)(t.code,{children:"AssistantAgents"}),". The ",(0,s.jsx)(t.code,{children:"UserProxyAgent"})," is your direct line of interaction, while the ",(0,s.jsx)(t.code,{children:"AssistantAgents"})," work behind the scenes, collaborating to build a robust multi-agent application."]}),"\n",(0,s.jsx)(t.h3,{id:"-autoflowtemplate",children:"\ud83d\udcc4 AutoflowTemplate"}),"\n",(0,s.jsxs)(t.p,{children:["Ready to launch a Autoflow? Publish it as a ",(0,s.jsx)(t.code,{children:"AutoflowTemplate"})," in the ",(0,s.jsx)(t.a,{href:"https://flowgen.app/gallery/",children:"FlowGen Gallery"}),"! Users can then deploy these templates to conjure up new Autoflows or strike up chats directly on the template itself."]}),"\n",(0,s.jsx)(t.h3,{id:"-chat",children:"\ud83d\udcac Chat"}),"\n",(0,s.jsx)(t.p,{children:"Each Chat represents a live session that has been spun up from a Autoflow or a AutoflowTemplate."}),"\n",(0,s.jsx)(t.h2,{id:"hello-world",children:'"Hello World"'}),"\n",(0,s.jsx)(t.p,{children:'Let\'s jump straight in and create a simple "Hello World" flow.'}),"\n",(0,s.jsx)(t.h3,{id:"initialize-a-new-autoflow",children:"Initialize a New Autoflow"}),"\n",(0,s.jsxs)(t.p,{children:["Head over to ",(0,s.jsx)(t.a,{href:"https://flowgen.app/auth/login",children:"FlowGen Login"})," and tap ",(0,s.jsx)(t.strong,{children:"Login as Guest"})," for a test run without the need to sign up."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Login",src:n(5017).Z+"",width:"1680",height:"1322"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"[!WARNING]\nGuest mode means your data is an open book to other guests. Sign in with your GitHub/Google/X account for a private experience."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Once you're in, go to the ",(0,s.jsx)(t.a,{href:"https://flowgen.app",children:"homepage"})," and hit the 'Build from Scratch' button to weave a new Autoflow."]}),"\n",(0,s.jsx)(t.h3,{id:"build-your-first-autoflow",children:"Build Your First Autoflow"}),"\n",(0,s.jsx)(t.p,{children:"Get started by tidying up the canvas\u2014scrap any sample nodes that are hanging about. Now, let's get crafting:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Tap the plus sign \u2a01 in the top left and ferry over an ",(0,s.jsx)(t.strong,{children:"Assistant Agent"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Next, snag a ",(0,s.jsx)(t.strong,{children:"UserProxy Agent"})," and drop it in place."]}),"\n",(0,s.jsx)(t.li,{children:"Connect these two, and voil\xe0\u2014you've got flow! \ud83d\udd17"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here\u2019s a visual to guide you through:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"flow",src:n(7669).Z+"",width:"2386",height:"1152"})}),"\n",(0,s.jsx)(t.h3,{id:"start-chat",children:"Start Chat"}),"\n",(0,s.jsxs)(t.p,{children:["Fire up your flow by smashing the ",(0,s.jsx)(t.strong,{children:"Start Chat"})," button at the top right. Pop in the message ",(0,s.jsx)(t.code,{children:"tell a story"})," and watch the magic unfold in your chat window:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat",src:n(564).Z+"",width:"994",height:"1468"})}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial was a breezy run-through, almost like a simplified ChatGPT."}),"\n",(0,s.jsxs)(t.p,{children:["Notice the conversation's quick? Just one round and boom, done\u2014",(0,s.jsx)(t.code,{children:"UserProxyAgent"})," gets the message, and that's a wrap. But hey, let's spice things up with more features to give that flow a bit more oomph. Keep your eyes peeled! \ud83d\udc40"]}),"\n",(0,s.jsx)(t.h2,{id:"more-readings",children:"More Readings"}),"\n",(0,s.jsx)(t.p,{children:"Got a taste for FlowGen? Feast on these resources for seconds:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://flowgen.app/gallery/",children:"FlowGen Gallery"}),": Feast your eyes on a buffet of ready-to-serve templates."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.flowgen.app/",children:"FlowGen Documentation"}),": The ultimate guide to becoming a FlowGen whiz."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/tiwater/flowgen",children:"FlowGen GitHub"}),": Peek under the hood at the source code."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://microsoft.github.io/autogen/",children:"AutoGen Documentation"}),": Master the art of AutoGen with this comprehensive tutorial."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/microsoft/autogen/tree/main/notebook",children:"AutoGen Notebook"}),": Dive into Jupyter notebooks showcasing AutoGen's prowess."]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"dive-in-and-let-the-creativity-flow-",children:"Dive in and let the creativity flow! \ud83d\udca1"})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},564:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chat-0ff1433f8258cb99f1b1366f495645af.png"},7669:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flow-371a678d0aad5ef64d2a88b5cb811391.png"},5017:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/login-3ef3a2effabd5a9e160805f427d4f1e7.png"},7541:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(959);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);