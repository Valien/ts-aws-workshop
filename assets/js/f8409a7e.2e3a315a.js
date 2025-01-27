"use strict";(self.webpackChunkts_aws_workshop=self.webpackChunkts_aws_workshop||[]).push([[903],{8189:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"intro","title":"Intro to Tailscale","description":"Tailscale is a secure and private, identity-based, infrastructure agnostic network with a","source":"@site/docs/intro.mdx","sourceDirName":".","slug":"/","permalink":"/ts-aws-workshop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Tutorial - Basics","permalink":"/ts-aws-workshop/category/tutorial---basics"}}');var s=i(4848),a=i(8453);const l={slug:"/",sidebar_position:1},r="Intro to Tailscale",o={},c=[{value:"How Tailscale Works",id:"how-tailscale-works",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started with the AWS Marketplace",id:"getting-started-with-the-aws-marketplace",level:3},{value:"What you&#39;ll need for today&#39;s workshop",id:"what-youll-need-for-todays-workshop",level:3},{value:"Login to Tailscale",id:"login-to-tailscale",level:2},{value:"Documentation Links",id:"documentation-links",level:2}];function A(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"intro-to-tailscale",children:"Intro to Tailscale"})}),"\n",(0,s.jsxs)(t.p,{children:["Tailscale is a ",(0,s.jsx)(t.a,{href:"https://tailscale.com/why-tailscale#secure-and-private",children:"secure and private"}),", ",(0,s.jsx)(t.a,{href:"https://tailscale.com/why-tailscale#identity-based",children:"identity-based"}),", ",(0,s.jsx)(t.a,{href:"https://tailscale.com/why-tailscale#infrastructure-agnostic",children:"infrastructure agnostic"})," network with a\n",(0,s.jsx)(t.a,{href:"https://tailscale.com/why-tailscale#flexible-topology",children:"flexible topology"}),", ",(0,s.jsx)(t.a,{href:"https://tailscale.com/why-tailscale#resilient-networking",children:"resilient networking"}),", and a ",(0,s.jsx)(t.a,{href:"https://tailscale.com/why-tailscale#streamlined-setup",children:"streamlined setup"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Whew. What does that all mean?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Secure and private"})," - Tailscale is built on ",(0,s.jsx)(t.a,{href:"https://www.wireguard.com",children:"Wireguard"})," and is end-to-end encrypted. Your data is never seen by Tailscale, not anyone else."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Identity-based"})," - Tailscale leverages a users identity for access. It brings users identity to the network layer versus using an IP address."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Infrastructure agnostic"})," - Tailscale can work with your VM's, containers, bare-metal, Pi's, and more no matter where they are hosted - in the cloud (AWS, Azure, Vultr) or on-prem or on the edge."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Flexible topology"})," - Tailscale is a mesh-based network overlay, use subnet routers, exit nodes, and design your network to fit your security and access requirements."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Resilent networking"})," - Connect your devices no matter wher they are and across any infrastructure."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Streamlined setup"})," - Setup in minutes and connect servers and systems programmatically."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-tailscale-works",children:"How Tailscale Works"}),"\n",(0,s.jsx)(t.p,{children:"We don't have time to dig deep into How Tailscale works, but you can reference this blog post by our CEO that goes into details on the ins and outs of Tailscale."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://tailscale.com/blog/how-tailscale-works",children:"https://tailscale.com/blog/how-tailscale-works"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Another fantastic and quite technical post is this one around NAT Traversal."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://tailscale.com/blog/how-nat-traversal-works",children:"https://tailscale.com/blog/how-nat-traversal-works"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"You should have received an email from Tailscale with information on creating your Tailnet."}),"\n",(0,s.jsxs)(t.li,{children:["If you have not created a tailnet yet then go to ",(0,s.jsx)(t.a,{href:"https://www.tailscale.com",children:"https://www.tailscale.com"})," and click the Log in button."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tailscale Getting Started",src:i(2525).A+"",width:"380",height:"76"})}),"\n",(0,s.jsx)(t.p,{children:"We will not be going over on how to configure your Identity Provider (IdP) for this workshop. But if you want to quickly get going (if you did not pre-register and pre-create your tailnet) then you can use your GitHub or any other public SSO login."}),"\n",(0,s.jsx)(t.h3,{id:"getting-started-with-the-aws-marketplace",children:"Getting Started with the AWS Marketplace"}),"\n",(0,s.jsx)(t.p,{children:"You can create a Tailscale account by going to the AWS Marketplace and signing up from there."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to the ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/seller-profile?id=seller-w4srvrf4waksi",children:"AWS Marketplace"})," and search for Tailscale. Click the ",(0,s.jsx)(t.strong,{children:"Pay as You Go"})," link."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS Tailscale Marketplace",src:i(3852).A+"",width:"1003",height:"734"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["On the next page click the ",(0,s.jsx)(t.strong,{children:"Try for Free"})," link."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS Tailscale Try for Free",src:i(2327).A+"",width:"1069",height:"259"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Once you're account is provisioned in AWS then follow the link to create your Tailscale account on Tailscale.com"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS Tailscale Try for Free",src:i(4638).A+"",width:"1145",height:"520"})}),"\n",(0,s.jsx)(t.p,{children:"This video here will also guide you through the sign-up process:"}),"\n",(0,s.jsx)("iframe",{src:"https://www.loom.com/embed/424a23d7c21e46ec9c567520cce9c8e6?sid=978446c8-8975-42f5-99af-f6447ebdf515",width:"100%",height:"500",frameborder:"0"}),"\n",(0,s.jsx)(t.h3,{id:"what-youll-need-for-todays-workshop",children:"What you'll need for today's workshop"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"CLI/Terminal access"}),"\n",(0,s.jsx)(t.li,{children:"AWS account access"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"login-to-tailscale",children:"Login to Tailscale"}),"\n",(0,s.jsx)(t.p,{children:"If this is your first time logging in then there will be a wizard to guide you through setting up your first device. Follow the wizard to install Tailscale on your device(s)."}),"\n",(0,s.jsxs)(t.p,{children:["If you have already created your initial device then you should be seeing the general ",(0,s.jsx)(t.code,{children:"Machines"})," page in the Tailscale admin panel."]}),"\n",(0,s.jsx)(t.h2,{id:"documentation-links",children:"Documentation Links"}),"\n",(0,s.jsxs)(t.p,{children:["You can access the full Tailscale KB here --\x3e ",(0,s.jsx)(t.a,{href:"https://www.tailscale.com/docs",children:"https://www.tailscale.com/docs"})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},3852:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/AWS_MP1-817a6045eaf226adfbfa6e177f7bd5f5.png"},2327:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/AWS_MP2-8d117e947aada05944f4e8417568f484.png"},4638:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/AWS_MP3-83ed14be6270ec958e84a5fd99c3baa7.png"},2525:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAABMCAYAAABu6gzTAAAKsWlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUk8kWx+f70kNCCyAgJfQmvQWQEnoApVdRCUmAUEIIBAU7sriCK4qICCgLuiig4KpUGyKKbRFQrOgGWRTUdbFgA+V9wCG4+85777ybczO//HO/O3fmzOTcAECmMvn8ZFgagBRehiDIy5UaERlFxY0BCMAAD7SAFJOVzqcHBPgBxObHv9uHu0g0YreNZ3L9+/f/1WTYnHQWAFAAwrHsdFYKwqcRn2LxBRkAoE4gutaaDP4M30FYToAUiPDoDMfP8dQMx84yWno2JiTIDWFtAPAkJlMQDwDJDNGpmax4JA9pZi4zHpvLQ3gzwk4pKalshDsQ1kdi+AjP5KfFfpcn/m85Y8U5mcx4Mc+tZdbw7tx0fjIz6//cjv9tKcnC+Tn0ECclCLyDkFER2bM/klJ9xcyLXe4/z1z2bPwsJwi9Q+eZle4WNc/pycGMeWYz3X3FeZKX+81zHNdTHMPNYITMMyfdI3ieBalB4nnjBG70eWYKFmoQJoWK9QQOQ5w/OyEkfJ4zuWHLxbUlBfsuxLiJdYEwSLwWDs/LdWFeT/E+pKR/t3YuQ/xsRkKIt3gfmAv1c3j0hZzpEeLa2Bx3j4WYUHE8P8NVPBc/OUAcz0n2EuvpmcHiZzOQw7nwbIB4DxOZPgHzDNyBB/BDXlQQDCyALeLmiBacwVmbMbMYt1R+loAbn5BBpSM3jkNl8FgmS6gWZhbWAMzc37nj8e7+7L2EFPALWloScqzfAwBrLWgx+gC0FQAgb7Cg6SBnnZwDwBkRSyjInNPQM28YQARSQA4oATXk10EfGCO12QAH4IJU7AP8QQiIBKsACySAFCAAa8B6sAXkgQKwC+wFZaASHAJHwXFwErSAs+AiuAJugF4wAB4BERgBL8E4+AAmIQjCQWSIAilB6pAOZARZQDTICfKA/KAgKBKKgeIhHiSE1kNboQKoCCqDqqBa6FeoDboIXYP6oAfQEDQGvYW+wCiYBMvBqrAubArTYDrsC4fAK+F4OA3OhnPhnXApXA0fg5vhi/ANeAAWwS/hCRRASaAUUBooYxQN5YbyR0Wh4lAC1EZUPqoEVY1qQLWjulG3USLUK9RnNBZNQVPRxmgHtDc6FM1Cp6E3onegy9BH0c3oLvRt9BB6HP0NQ8aoYIww9hgGJgITj1mDycOUYGowTZjLmAHMCOYDFotVwOphbbHe2EhsInYddgf2ALYR24Htww5jJ3A4nBLOCOeI88cxcRm4PNx+3DHcBVw/bgT3CS+BV8db4D3xUXgePgdfgq/Dn8f345/jJwnSBB2CPcGfwCZkEQoJhwnthFuEEcIkUYaoR3QkhhATiVuIpcQG4mXiIPGdhISEpoSdRKAEV2KzRKnECYmrEkMSn0myJEOSGymaJCTtJB0hdZAekN6RyWRdsgs5ipxB3kmuJV8iPyF/kqRImkgyJNmSmyTLJZsl+yVfSxGkdKToUquksqVKpE5J3ZJ6JU2Q1pV2k2ZKb5Qul26Tvic9IUORMZfxl0mR2SFTJ3NNZlQWJ6sr6yHLls2VPSR7SXaYgqJoUdwoLMpWymHKZcqIHFZOT44hlyhXIHdcrkduXF5W3ko+TH6tfLn8OXmRAkpBV4GhkKxQqHBS4a7Cl0Wqi+iLOIu2L2pY1L/oo+JiRRdFjmK+YqPigOIXJaqSh1KS0m6lFqXHymhlQ+VA5TXKB5UvK79aLLfYYTFrcf7ik4sfqsAqhipBKutUDqncVJlQVVP1UuWr7le9pPpKTUHNRS1RrVjtvNqYOkXdSZ2rXqx+Qf0FVZ5KpyZTS6ld1HENFQ1vDaFGlUaPxqSmnmaoZo5mo+ZjLaIWTStOq1irU2tcW117mfZ67XrthzoEHZpOgs4+nW6dj7p6uuG623RbdEf1FPUYetl69XqD+mR9Z/00/Wr9OwZYA5pBksEBg15D2NDaMMGw3PCWEWxkY8Q1OmDUtwSzxG4Jb0n1knvGJGO6caZxvfGQiYKJn0mOSYvJa1Nt0yjT3abdpt/MrM2SzQ6bPTKXNfcxzzFvN39rYWjBsii3uGNJtvS03GTZavnGysiKY3XQ6r41xXqZ9TbrTuuvNrY2ApsGmzFbbdsY2wrbezQ5WgBtB+2qHcbO1W6T3Vm7z/Y29hn2J+3/cjB2SHKocxhdqreUs/Tw0mFHTUemY5WjyInqFOP0s5PIWcOZ6Vzt/NRFy4XtUuPynG5AT6Qfo792NXMVuDa5fnSzd9vg1uGOcvdyz3fv8ZD1CPUo83jiqekZ71nvOe5l7bXOq8Mb4+3rvdv7HkOVwWLUMsZ9bH02+HT5knyDfct8n/oZ+gn82pfBy3yW7Vk2uFxnOW95iz/wZ/jv8X8coBeQFnAmEBsYEFge+CzIPGh9UHcwJXh1cF3whxDXkMKQR6H6ocLQzjCpsOiw2rCP4e7hReGiCNOIDRE3IpUjuZGtUbiosKiaqIkVHiv2rhiJto7Oi767Um/l2pXXVimvSl51brXUaubqUzGYmPCYupgppj+zmjkRy4itiB1nubH2sV6yXdjF7DGOI6eI8zzOMa4objTeMX5P/FiCc0JJwiuuG7eM+ybRO7Ey8WOSf9KRpOnk8OTGFHxKTEobT5aXxOtKVUtdm9rHN+Ln8UVp9ml708YFvoKadCh9ZXprhhzSKN0U6gt/EA5lOmWWZ35aE7bm1FqZtby1N7MMs7ZnPc/2zP5lHXoda13neo31W9YPbaBvqNoIbYzd2LlJa1PuppHNXpuPbiFuSdryW45ZTlHO+63hW9tzVXM35w7/4PVDfZ5kniDv3jaHbZU/on/k/tiz3XL7/u3f8tn51wvMCkoKpnawdlz/yfyn0p+md8bt7Cm0KTy4C7uLt+vubufdR4tkirKLhvcs29NcTC3OL36/d/XeayVWJZX7iPuE+0SlfqWt+7X379o/VZZQNlDuWt5YoVKxveLjAfaB/oMuBxsqVSsLKr/8zP35fpVXVXO1bnXJIeyhzEPPDocd7v6F9kttjXJNQc3XI7wjoqNBR7tqbWtr61TqCuvhemH92LHoY73H3Y+3Nhg3VDUqNBacACeEJ178GvPr3ZO+JztP0U41nNY5XdFEacpvhpqzmsdbElpErZGtfW0+bZ3tDu1NZ0zOHDmrcbb8nPy5wvPE87nnpy9kX5jo4He8uhh/cbhzdeejSxGX7nQFdvVc9r189YrnlUvd9O4LVx2vnr1mf63tOu16yw2bG803rW82/Wb9W1OPTU/zLdtbrb12ve19S/vO9zv3X7ztfvvKHcadGwPLB/ruht69fy/6nug++/7og+QHbx5mPpx8tHkQM5j/WPpxyROVJ9W/G/zeKLIRnRtyH7r5NPjpo2HW8Ms/0v+YGsl9Rn5W8lz9ee2oxejZMc+x3hcrXoy85L+cfJX3p8yfFa/1X5/+y+Wvm+MR4yNvBG+m3+54p/TuyHur950TARNPPqR8mPyY/0np09HPtM/dX8K/PJ9cM4WbKv1q8LX9m++3wemU6Wk+U8CcbQVQiMNxcQC8PYL0CZEAUHoBIK6Y669nDZr7TzBL4D/xXA8+azYA1HQAELIZAD8XAA4iki7CZMQDkM8hLgC2tBT7fC8827fPmPQxAKoqzOx8GINZZeCfNtfTf1f3P0cgzvq38V/4iQp5gZFAIQAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAABfKADAAQAAAABAAAATAAAAABBU0NJSQAAAFNjcmVlbnNob3Sfl5ThAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj43NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zODA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KzurS4AAAF5VJREFUeAHtXQeYVMWyroVFQEAEyTkrCEoGURSUoCJZMiKKyDWgXMPzYSLp8+rFRFQRySBBkmTJOcdFcs5Lkpzh/X/v9nB2mGV3ZnfYYabq+3bnzAl9uv/urq76q86ZsJLFi98QFUVAEVAEFIGgRyBZ0LdQG6gIKAKKgCJgEAg7f/a0Wvg6GBQBRUARCAEE1MIPgU7WJioCioAiQARU4es4UAQUAUUgRBBQhR8iHa3NVAQUAUVAFb6OAUVAEVAEQgQBVfgh0tHaTEVAEVAEVOHrGFAEFAFFIEQQUIUfIh2tzVQEFAFFQBW+jgFFQBFQBEIEAVX4IdLR2kxFQBFQBFTh6xhQBBQBRSBEEFCFHyIdrc1UBBQBRSBcIVAEAhWBiA0RMn7cOFm2fIWcPHFCrl+/HqhV1XopAl4jkCxZMsmQMaNUKF9O6tWvL8VLFPe6DG8v0JeneYuYnn9HEPiiazeZM3eeXDh//o7cT2+iCCQlAqnvvVeqVnlKPv38M79WQxW+X+HVwn1BoG2btrJj5065eOGCL5frNYrAXYlAqtSppWCBAtKvfz+/1V85fL9BqwX7ggAte1X2viCn19ztCNDA4djnHPCXqML3F7JartcIkLMnjaOWvdfQ6QVBggDHPucA54I/RBW+P1DVMn1CgAFa5ex9gk4vCiIEOAc4F/whqvD9gaqW6RMCzMZRUQQUATGZaf7AQRW+P1DVMn1CgKmXKoqAIiAmDdkfOKjC9weqWqZPCGievU+w6UVBiIC/5oIq/CAcLNokRUARUAQ8IaAK3xMquk8RUAQUgSBEQBV+EHaqNkkRUAQUAU8IqML3hIruUwQUAUUgCBHQl6cFYadqk25FIG3atHLjxg05d+7crQd1j98QCAsLk6efeUa2bdsme/fs8dt9nAWXKl1aSpYsKRfwENPoUaPk2rVrzsMhvR2nhX/kyBHZsnmz8PPYseMB8cbCq1evmPpcuXzZb53HwcI2X7t2597QSHxPnjzptza5F7x48WI5ePCg++6g+Z4iRQp58+23Zcjw4TJv0SJZuHSp/Dl1qjR48UXhmwq9lVy5c0u+fPm8vSzG+bxvoUKFJGvWrDH2J+TLA5kymTLZ3sSQ115/XdZs2CBUnAmVBx96SLp//7181qmTKSq29n/eubO5Z7Zs2RJ0y6bNmslvgwZJ+w4dpMVLL90RZV++QgVT965ffJGgut+Ji+O08H/q+1OMeqS85x7hwK/8ZGXJmzdvjGN36svBAwdlwICB0qpVK8lfIL9fbrt923YZO3astG//tmR84AG/3MO90GHDhknWLFmkabOm7ocS/fvFixdlzqzZZlLnyJEj0csPhAI//vRTqdeggRw/flzGoS+vXb0qNZ991iif3BjDP0IReSPf/fCDZMiQQao//bQ3l8U4l57GaDxFOW3KFOn40Ucxjvn6pc1rr0mzFi2k3gsvyJ47ZEXHt65bt2yRH777TtasXm0uia39HI8UGloJkfoNGwrLql+7tkRGRiakqHhfaz0I+xnvC5PgxDgVfrp06SRVypRGCV2FaxQZeVTWr1snw4YMlQYNG8hDRYsmQbX1lglFIFWqVPL+hx/IPVjAg1GaNm9ulP3yZcvkDVisNq/55759ZTAs/tavvip/zZghf2/cGIzND5g2EfdBAwbEWR+Xwo9W/HFeEMsJ2WG87Ni+XQ4fPhzLGYm/2yp66sdAlzgVfvLwcGPhWis3CyzQYsWKylAo/GnTZ8RQ+AsWLpTNERvl1Nmzki9vPqmC9ztnypxJli1bLgtxrF27dpI2bRq5fOmS9OrVWwrCta1bt47BaCnc7cWLFku7f7WTiPUbZMXKlWZBmfnXTDkMaqVA/gL4kYA6Eh7u2W3d9PffsnLlKjl06JDQYq1QobwULlLElE3udjnqsGLFCjl96pT50QHWrWixYq7+2bVzl8xfMF+OHDoMr6GA5MvvH8/BdUMfNjgpZs6cZQa0dY2r16jmwoT004zp02XTpk2SPHlyeaZaNVmzZo3cf//9Urv2C7fcsU/vPlLxsYpSqVIlWbZkqdeY31JgAO1o3KSJnEJf/++HH7qUPat3Ak/zfvvNN/LJZ5/J40884VL4pEPatG1r9uVH32+H0ujTqxfGzTJj1Y8YPdpFw0ybORPe0Sz5+quvbmkxcf/Xm29KVXgBVD7krYfDc/tzwgR5qmpV+errr801zz7/vJQqU8ZYv7T2U8KoatW6tdSCZZodtEbk0aMycfx46d+vn6k/PQvWYQLfNwQruDks+nnz5hmKqWy5cqbM8ZMmmfa0aBrlIZIe4cL2GPo33X33GSv7+2+/lf379rnqnT59enn7nXfkicqV5TrmyR+4R2KKrfdfGJcrMadjaz/bxMWBusFKURiT7/z738LPy6BvV8NL+C/wO37smD3F9fkOKJzn4eHQQH24eHFhH61Ztcp4Ub9iwbly5YoMHTxYOrz/PuZLuPEAePELderIc889J4+C8+ciMWrkSBkD3t8aCDyH1FYjjKcKFSsa72Hu7NlmbNh4kFX49CADXbwnMtEiKhsqy1P//CNnz0YFwebiDW+zQRHkzptHKmPwHI08IsNgSfF4njy55eyZM7J3b1TQZvfu3XIG3xnIoTKmbN2yVdLem0bSpEkjl65cln/AZc9DmYWLFDbKfuPGCKHy9yQ7duyUMaPHSAp0JANElNGjRruCRKtWrZZp06ZJEZRVv0F9yQTOk+efgKtPIXc+8vff8eKuC1IFE/UeTL65c+eaY4HyjwOQbaIyL122jJR45BHZAJ51zOg/XINz8uTJshyLWrGHi0lF8IoLoBAOgaO31pN7W85gYb50MWqCeYu5e1mB9J1jKC+49rVY7DzFROZgwlaD8u3388+uanfq0kXawiBh3IaBPiqqn3/91UzyS1BCU4GtFW6vXbvWfo3x+VHHjkIOfBdec8vyeS253Wo1api+oHK3wnKs8uUCxHjD7l275Bdcx4WC31kWJRkWEvL+NWrWlNavvGK8bBo5C+bPt8XJ3DlzhG2jpAF11BPeDJXgSoyJmfBmypQtK0NHjJCM+JUlChen/4JuebFxY9m/f78sWrBAGmOxeL5WLXM8Mf5RV7De92Fh4ViMrf2MJUVgPFvJlj27DBwyxBhfv6PO9MYqP/mk9P3lF4/xF17r3kc08CiMcdD464J+iET/Wsz4K1PdvvxS0mKR4Pw/dfq0dPzkE7Ng23oUefBB6QUcOd8mTZxo6kjvsUefPsKANMWl8IPBwrcNd//MAsudEnnksKRKnVcWYuCVh6XxLFZLChV1n569ZN26tcaC5ADcCSu6GBYKKvwCBQvi+06jbDNkvN8MfFoiVq5BwTFOkCtXLrPr2LGjuC5qwbDn2M8FGKiZ4Xk0btrEDIbSpUtJ3z59ZcGChdICcYZHShSXbFmzmNgDr8mKwfQ3JsuePXuN97J2zWqz8DRv2ULuQ+dTRgwfIVu3bjXbgfCPCoB4NW7cyOWZZIRSGgeLj15NlsyZjTVfsWIFqQmlQClQqKDQio+veIN5fMtMivNIM1LRkD92ChcC7rfCiXoebyakIqFl3atHD2NR8/jggQMN1/4+PITG4IXJ99Mj4EJwO+6fVjwV24ewJCkjYN0zeHgACtXy2eSZqfhsOawTlfJmJEcMHzrUXDegf3+ZDiuVBsgvP92Mo/H+TRs1ikFZ0JInh/8DrHfL4b+Oxasg5lgbeA2WP5+GgHV/tIuLyDf/+Y9Uq15dypUvL+P++EO6du5s7vsrFOooxDv8IbG1n/ea/Oef5s/el7qAhlefnj1lIrwjyhIkGTyAeBq9MS6kTpkNj4t/DYENF02LrT2H17WH57UQuoJCT+CTzz+XxWAe2r/1ljGaqMC5oLzSpo2MxCLD2A8NgbMwjFpByVvjgYYBF2N6cbxnSCj8c5goFCryyCORQmVBC9oKlVEmKCEGWAkkMxP2QNFTdu/cLY9CKdPqp/I/fz6zXIE7VKhwIXPc/sue/WYwMScU/xa3CczzaPkeOnBAyuJ3Ie1k5mcB0DIR0fwsBw6pKVJORyOPmgnJa637eOjwEcmMulplz2NckAJJ4R+EUgeQZiFl/ShcVCkHgPF1Whfwlgqh3lbYJvaPNxIfzL0pLynOTYn4BMVdKdC1d8acaBW+hIlM641ChUQ6wAq9UFqGjHOQUoiP0KugFf4eFgpanCzzN3gKtxOOYavU7gP1Qu+E45c/e+ceUOfCEB9+mhQF5x3rbdtk8Sj28MOmOhaLEfDErTDQOR/ebe26de2uWz6pECs+9liM/dPhQY8dMybGvoR8IY4U0lyXQccsB+VrlbUv5ZIxcF5PhoLUDqk7J7W7D3QXqZtChQsLPWBixThPjpw5zR/vvXfvXlMFXkeFb+Ye9gQFh29a5uHfYXDdpFDI6VtFTgCdEg6X0U4ULgbr4AaTRjkEuqc+BjS398Bqv3DxghncOQGqUzBe45TrN66bFTZFintinBueIlyuYrBzMjE+8NeMvyQfJlLOXDklf75KMhHumZWrWGzC3YKXdHcDSS5duiy0TZMlu1mvFGgj5QooMLbTSNhNC5bfrdsZdTDu//HBPO5SkvaMTdELPVMCnTII1i3pDFqIHd57z9CKPG5jPT1693ae7tqm0qVhEh/piUweYt4SVv1LyCIj7TkMVjstd8v5eiqHXkb7d9911YUKinSne/9ZQ8tTGc59xUuUMF9J4biL9ZoZq6LQ+3AK6Z3bCfFLjZ/jc4r73Hce82WblNiX3boZb8Ty/kuXLDHejvVYvCn3vFv2j+1zLij8cxdmcf2DvqNQ6XvCkedQrKK3it/sDNB/MTV0PCtJnpPBLFoiHJDk27AhezFQuI9C3vgYgitcLSm0WJLhHAZw08HqzAxKqBAoh8lTpmJRuGTcT2uhmwvi+S88ORadzFlcXKi9jFZvNkxUlrlq5SpDJTUCHUKx3L09Nxs4xg3r1wvz+lNEK/798BoCSXLmyG6CagdQLzvQ9u+Lmpg54AllhVvPPtixfRuwjJrIjE3Qiwo1oetNWuWRRx8VZiPZGIblj61Fb63Ig9F9TaqEQV13cR8v7sed36ks/wd0DgO2DKbWgaVM95/Weo9Y0kBJyXwPOonWZYf27SUiIsIEJvn8QB4fU5937thh6tDAg6VujQNSgRQabc4FLa5nBEgxOWkmZ/sTc5vBUwapS5YqZTwKBk5/AuXC+Au9r4SI7fPuCOAz0cFdOG+4sFEYG/k/Dzn2l6IzijgnW2OBP3IHM4Pc6xvf7zHNQQ9X0follbJu7TpZjh+oGDt2nAwaOEgY3WcAlMJJxUj6ovkLZP36DaAYDsh4nEcpDv6cwnM4eBlULAB6h8Ic+vNwm7bBrSoC19lXKVW2jOzAAGfgmBk9s8B90usoBbeWQjeZfNwJKILjUILTpsXsYAY5L4ATHD9+gpl0bOfmaCvR1zr5et0ZBI42bIiI8Xcag4/Y0TqdPGkyAoK7TKbO5MlTDHefO08ugy+fLlyydJlMwX5mRY1BxkXqaHrD1/rcrddNAZ1CxfUFMmmcVjLH4bvI/KCsRhYHZSMULOUheARHQWnYPy4YuUElOjna21mytHrr1qsnVaJ5fGbmvPXGG8bLtRQIqU+KsxzSB/QoyffPA53CLBRm7VgL3Fxwm3+2fuHRCoqnkq66F4sM22vbw3KZjUP+mrIFCQCUGng2wQqvccbS7P7E+vTUfk9lk4Z6Fc8XUOmuWL5cev74o/GSSM+WRnZTQiW2Pqc3xzgjF8XTmIv7QN8wY4/ZfRbH5DAiyyP2YRcEUsNcMGkIB7rEaeFfiQ6OjEeKGCkccullEe0nZ87BYaVBw/pQ8hNkClLDLsFSptXQuEljw43bc8g5E5jC0QqfKZa58+QxwUha+75KuXJlDS20AoqaE4YDukbNGrAMohR+terVEIUfiUHTw7SB6YrMELLCB8hqITOBaW4M5jIAWhWTdpqHld9e469PcvVjEURzSjM8iMVsgRYvtcRPn41HSuwQo8SIHTMNbKpqnTq1zUK8HcFmpvVVR2bIDHCroSi9EewjPuTTJwEDBufCMFGpeEkdDvztNxMoJTbMbKGC5INaDP4z+4VWJRUOjzEdkLIM1ODLyJBh0I6LxSqkGTqF9OXrUPAMrPYAtUNlUR33ZwxgBTxiyjkYOFQ2tP5psVKZ8X6U+nhIjMF5KvuWoIM436wyNyfE8o/14vltEYwlp0yLdTCeNmXGWh9k/AwGlXUY44reBrOFmE7KwCYNI/LxbA8fiKJXUBsLllVksdwuQbs9tZ91cReOd1JcjEUwNsBMm7oY60yvtJ6Z+zXefGesgoHZJngyl/02H0kn1FlvwRu7CJ3Hh9goDOR/BS+gJ7JyOC9J2zB9l4t0c/QfDUmOqd7weqj7PkOWTyBL2Pmzp6PyIhOpluQdmVPrXAwSqeh4FcM0UOb6e5JTp04j7TO1S0G6n8O6nzt3Ptbr3c9Pqu+knsKShd3SDtafgTladRSe9233b2ERlTaKL6nqG9/7Vqp4M0srvtfc7jwqWmakcELSYiQ+m2HVTkWGzDAsmk5Jj2cVmJHBrBUqP3q2pICY901Lj0LuuyMWBdKUDOS1QmaMu1BRde7a1RUIZBYQ8+m/697dKCueXwnZPu2R+86gKbNxuDhQGX/08cdm3tC6ZLyBliYDg089/rhReDNBLTC42wl1cAppyy7gu5k1QuroCdSPc5A8/nsffGA+qcSpbPsjgMwHoSytkw8UbCfUl94MPaHpyORhthBjHK++/LIrw8d5P2+2mR0zE0aYs96e2u9eJj0eLkRcYDme2Xfk9bvgFQ188DM2mY9MHi4gzr4ZhwwgjoVaWHydQtyYl0+jgN4g78E4YzeMAy5+Vui1tQQWzHoiRkwhZZbTPPQHhR4Hs3tIP3mifmw53n4uXrrY20viPD/RFX6cd9QT/IbA4EGDzaSuUrWKGeCrVq8xefutX27liq347eaJUHBiK3xnlZitxAdjLJ/vPObcphLIjpgU3XMqfU/C9E4es1kvHs/B/dKDSiRPTkXiSUiLkou2ypf3pgd9DN4ZFba3QqVO74BphE7hvgygA8kxx1YX0p6kW7go3Clxb7+n+xITxjiYI+/Pupl7gLa5He73w3MLQyVteqazvqSabNafc39CtlXhJwS9ELiWMYpZeDhtN2gBZijxAbOn8EQxrc67Qfyp8O+G9msdFQEnAv5Q+HFy+M4K6HZgI8BnH2wmUmDXVGunCCgCSYFAnFk6SVEpvacioAgoAopA4iOgCj/xMdUSFQFFQBEISARU4Qdkt2ilFAFFQBFIfARU4Sc+plqiIqAIKAIBiYAq/IDsltCsFFPwVBQBRSDqFfT+wEFnmD9Q1TJ9QoC54iqKgCIg5rkJf+CgCt8fqGqZPiFQAa/rUFEEFAERf80FVfg6ugIGAb4XiK8GUFEEQhkBzgHOBX+IKnx/oKpl+oQA36xaFU8Gp3J717pPhelFisBdiADHPueAfctwYjdB36WT2IhqeQlGoG2btrIDL8q66MP7ZBJ8cy1AEUgiBKjsC+J3Q/r17+e3GqiF7zdotWBfEeCAfxovgFN6x1cE9bq7DQGOdY55fyp7YqIW/t02MkKovhH4IZjxeOXsMvzOwUn8EpV9q2QIQaBNDWIEmIbMzDQGaMnZ+4vGcUKoCt+Jhm4rAoqAIhDECCilE8Sdq01TBBQBRcCJgCp8Jxq6rQgoAopAECOgCj+IO1ebpggoAoqAEwFV+E40dFsRUAQUgSBGQBV+EHeuNk0RUAQUAScCqvCdaOi2IqAIKAJBjIAq/CDuXG2aIqAIKAJOBFThO9HQbUVAEVAEghgBVfhB3LnaNEVAEVAEnAiowneioduKgCKgCAQxAqrwg7hztWmKgCKgCDgRUIXvREO3FQFFQBEIYgRU4Qdx52rTFAFFQBFwIqAK34mGbisCioAiEMQIqMIP4s7VpikCioAi4ERAFb4TDd1WBBQBRSCIEVCFH8Sdq01TBBQBRcCJgCp8Jxq6rQgoAopAECOgCj+IO1ebpggoAoqAEwFV+E40dFsRUAQUgSBG4P8BAr6mjUT2xtkAAAAASUVORK5CYII="},8453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var n=i(6540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);