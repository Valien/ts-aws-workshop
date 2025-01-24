"use strict";(self.webpackChunkts_aws_workshop=self.webpackChunkts_aws_workshop||[]).push([[899],{1031:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorial-basics/creating-vm","title":"Creating a VM in AWS","description":"Navigate back to the Machines tab. You should see at least 1 device if you followed the initial setup wizard and installed Tailscale on your computer or phone, etc.","source":"@site/docs/tutorial-basics/creating-vm.mdx","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/creating-vm","permalink":"/ts-aws-workshop/tutorial-basics/creating-vm","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Tour of Tailscale","permalink":"/ts-aws-workshop/tutorial-basics/tour-of-tailscale"},"next":{"title":"Access with Tailscale","permalink":"/ts-aws-workshop/tutorial-basics/access-vm"}}');var n=i(4848),a=i(8453);const o={sidebar_position:4},l="Creating a VM in AWS",r={},c=[{value:"Add AWS VM Details",id:"add-aws-vm-details",level:2},{value:"Cloud Formation Stack",id:"cloud-formation-stack",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Permissions",id:"permissions",level:3},{value:"View CF Details",id:"view-cf-details",level:2},{value:"Verify Machine in Tailscale",id:"verify-machine-in-tailscale",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"creating-a-vm-in-aws",children:"Creating a VM in AWS"})}),"\n",(0,n.jsx)(t.p,{children:"Navigate back to the Machines tab. You should see at least 1 device if you followed the initial setup wizard and installed Tailscale on your computer or phone, etc."}),"\n",(0,n.jsx)(t.p,{children:"Let's go ahead and add our 2nd device and use AWS as our cloud provider to provision this device."}),"\n",(0,n.jsxs)(t.p,{children:["Scroll down to the bottom of the page and click the ",(0,n.jsx)(t.strong,{children:"Add AWS VM"})," button."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add AWS VM",src:i(8114).A+"",width:"889",height:"337"})}),"\n",(0,n.jsx)(t.p,{children:"This will open up a page or a new tab with a small form to fill out and after you submit the information it will provision an EC2 instance on AWS and auto-join it to your tailnet."}),"\n",(0,n.jsx)(t.p,{children:"Let's dig into the details below!"}),"\n",(0,n.jsx)(t.h2,{id:"add-aws-vm-details",children:"Add AWS VM Details"}),"\n",(0,n.jsx)(t.p,{children:"There are a few things that will need to be filled out here before creating the VM on AWS."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Tags"})," - This is an optional flag for the workshop. But we do recommend you leverage tagging for  your devices. It will help with ACL management and access control. For today, let's turn it ",(0,n.jsx)(t.strong,{children:"off"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Ephemeral"})," - Let's turn this ",(0,n.jsx)(t.strong,{children:"on"})," for today. Ephemeral means that when the device is disconnected from the tailnet (i.e. we delete the VM) then Tailscale will clean up and remove the device\nfrom the tailnet after a certain period of time."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Exit node"})," - Let's turn this ",(0,n.jsx)(t.strong,{children:"on"}),". We'll showcase how you can use Tailscale to route your internet traffic through this device."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"We'll also have to add IP Forwarding in a later setup. Stay tuned!"})}),"\n",(0,n.jsxs)(t.p,{children:["After checking the flags, read the note and then click ",(0,n.jsx)(t.strong,{children:"Continue to AWS"}),". If you have already logged into the AWS console then this will open up a new tab and\ndrop you into the Cloud Formation section of AWS with a number of fields pre-filled out."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add AWS VM",src:i(2509).A+"",width:"744",height:"806"})}),"\n",(0,n.jsx)(t.h2,{id:"cloud-formation-stack",children:"Cloud Formation Stack"}),"\n",(0,n.jsx)(t.p,{children:"Let's look at the details before we provision our VM."}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"The Tailscale Cloud Formation template is still being improved upon by our engineering team. It works fairly well but if you run into any issues with it please let us know!"}),(0,n.jsxs)(t.p,{children:["As of today the AMI that is used is only usable in ",(0,n.jsx)(t.code,{children:"us-east-2"}),". You can change regions, but you will need to find an AMI that is in that specific region before deploying the stack."]})]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Stack name"})," - Enter the name of the stack. For today let's put in - ",(0,n.jsx)(t.code,{children:"Tailscale-AWS-Workshop"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"AuthKey"})," - this should already be pre-populated."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ExtraArgs"})," - You can pass more arguments into the startup of Tailscale as needed. For now let's leave ",(0,n.jsx)(t.code,{children:"--ssh"})," as this will allow you to SSH into the EC2 instance after it is configured using Tailscale SSH. Because we also selected the ",(0,n.jsx)(t.code,{children:"Exit Node"})," option on the previous screen we can see the flag listed here - ",(0,n.jsx)(t.code,{children:"--advertise-exit-node"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Hostname"})," - Enter - ",(0,n.jsx)(t.code,{children:"TailscaleDemo"})," or something similar."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ImageID"})," -  Go ahead and leave this as is. This AMI is in ",(0,n.jsx)(t.code,{children:"us-east-2"}),". You can verify an AMI from here - ",(0,n.jsx)(t.a,{href:"http://www.amilookup.com",children:"www.amilookup.com"}),". If you want to change regions, then make sure to find a suitable AMI that is in that region."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"InstanceType"})," - For today we can leave it as is or you can change it to a bigger or smaller instance type as needed. For today's workshop the default is fine."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"VpcId"})," - If you have your own VPC already setup you can put in it's ID. For the workshop leave it blank so we can use the default VPC."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"VpcSubnetId"})," - Same as above."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["If you change the ",(0,n.jsx)(t.code,{children:"VpcId"})," and ",(0,n.jsx)(t.code,{children:"VpcSubnetId"})," for the workshop, make sure you have an IGW, and a Public subnet so that the EC2 devices can be accessed easier with Tailscale."]})}),"\n",(0,n.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsx)(t.p,{children:"Leave this blank for the workshop."}),"\n",(0,n.jsx)(t.p,{children:"Your template should look like the following:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add AWS VM",src:i(9713).A+"",width:"1433",height:"1512"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you're satisfied with the inputs, click on ",(0,n.jsx)(t.strong,{children:"Create stack"})," and let's watch it build!"]}),"\n",(0,n.jsx)(t.h2,{id:"view-cf-details",children:"View CF Details"}),"\n",(0,n.jsx)(t.p,{children:"After you click the Create Stack option you'll see a Cloud Formation page showing the details of the stack being built. What does this stack do?"}),"\n",(0,n.jsxs)(t.p,{children:["It builds out an Ubuntu EC2 instance on ",(0,n.jsx)(t.code,{children:"us-east-2"})," with the corresponding networking components and then installs, configures, and joins the EC2 device to your tailnet."]}),"\n",(0,n.jsx)(t.p,{children:"Click the Refresh button to see the status of the build."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add AWS VM",src:i(747).A+"",width:"1444",height:"640"})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"The AuthKey that is created for the CF template is only valid for 1 hour. If you start the wizard and come back after an hour without building it, then it will build out the AWS infrastructure but Tailscale will not be successfully installed since the AuthKey will have expired."})}),"\n",(0,n.jsx)(t.h2,{id:"verify-machine-in-tailscale",children:"Verify Machine in Tailscale"}),"\n",(0,n.jsx)(t.p,{children:"Go back to the Machines page in Tailscale and after a few minutes a new machine should show up!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add AWS VM",src:i(5846).A+"",width:"1178",height:"410"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8114:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tailscale_add_aws-1-7c9bb74f11b5cdb320743a3885303c5c.png"},9713:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tailscale_aws_cf-da1bae67f1cb5744ff8263cf9a571cc8.png"},2509:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tailscale_aws_details-1-e758254fdc3bfeaa757a1e50104b2a3b.png"},747:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tailscale_cf_details-8ae51b6514ae68379906d63fce7f9af4.png"},5846:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/tailscale_new_ec2-6c1eeec5fdc79f68042984a0523f5fdc.png"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(6540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);