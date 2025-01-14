---
sidebar_position: 1
---

#  Intro to Tailscale

Tailscale is a [secure and private](https://tailscale.com/why-tailscale#secure-and-private), [identity-based](https://tailscale.com/why-tailscale#identity-based), [infrastructure agnostic](https://tailscale.com/why-tailscale#infrastructure-agnostic) network with a [flexible topology](https://tailscale.com/why-tailscale#flexible-topology), [resilient networking](https://tailscale.com/why-tailscale#resilient-networking), and a [streamlined setup](https://tailscale.com/why-tailscale#streamlined-setup).

Whew. What does that all mean? 

* secure and private - Tailscale is built on [Wireguard](https://www.wireguard.com) and is end-to-end encrypted. Your data is never seen by Tailscale.
* identity-based - Tailscale leverages a users identity for access. It brings users idenity to the network layer versus using an IP address
* infrastructure agnostic - Tailscale can work with your VM's, containers, bare-metal, Pi's, and more no matter where they are hosted - in the cloud (AWS, Azure, Vultr) or on-prem or on the edge
* flexible topology - Tailscale is a mesh-based network overlay, use subnet routers, exit nodes, and design your network how you would like it
* resilent networking - Connect your devices no matter wher they are and across any infrastructure
* streamlined setup - Setup in minutes and connect servers and systems programmatically

## Getting Started

* You should have received an email from Tailscale with information on creating your Tailnet.
* If you have not created a tailnet yet then go to https://www.tailscale.com and click the Login button.


![Tailscale Getting Started](/img/tailscale_getting_started.png)

We will not be going over on how to configure your Identity Provider (IdP) for this workshop. But if you want to quickly get going (if you did not pre-register and pre-create your tailnet) then you can use your GitHub or any other public SSO login.

### Getting Started with AWS Marketplace

You can create a Tailscale account by going to the AWS Marketplace and signing up from there.

* Go to the [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=seller-w4srvrf4waksi) and search for Tailscale. Click the **Pay as You Go** link.

 ![AWS Tailscale Marketplace](/img/AWS_MP1.png)

 * On the next page click the **Try for Free** link.

 ![AWS Tailscale Try for Free](/img/AWS_MP2.png)

 * Once you're account is provisioned in AWS then follow the link to create your Tailscale account on Tailscale.com

 ![AWS Tailscale Try for Free](/img/AWS_MP3.png)

This video here will also guide you through the sign-up process

<iframe 
    src="https://www.loom.com/embed/424a23d7c21e46ec9c567520cce9c8e6?sid=978446c8-8975-42f5-99af-f6447ebdf515"
    width="100%" 
    height="500" 
    frameborder="0">
</iframe>

### What you'll need

- CLI/Terminal access
- AWS account access

## Login to Tailscale

If this is your first time logging in then there will be a wizard to guide you through setting up your first device. Follow the wizard to install Tailscale on your device(s).

If you have already created your initial device then you should be seeing the general `Machines` page in the Tailscale admin panel.


## Documentation Links

You can access the full Tailscale KB here --> https://www.tailscale.com/docs
