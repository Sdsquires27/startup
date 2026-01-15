# Web Server Setup

## Technology Stack
### Technology Stack
The collection of technologies used to create and deliver a web page is called a technology stack, because each one stacks on top of the others. People don’t know how to create this right, and so different companies will use it in different ways. We will do the following: React for the web framework, talking to Caddy as the web server hosted on AWS, running web services with Node.js, and MongoDB as the database hosted on MongoDB Atlas.

### Complex Technology stack
With many bigger companies, stacks get larger and larger. It is important to keep in mind things like dependability, scalability, support, and security when choosing what items to build with in your stack, among other things.

## The Internet
### The Internet
The internet globally connects a wide variety of devices. You can think of it as a web, though many pieces of that web are wireless and some are not connected. It is important to have a correct understanding of the internet.

### Making Connections
When a device wants to talk to another, it must have an IP address. Because humans prefer names, they use a Domain Name instead, which can be transferred to an IP address using DNS (Domain Namy System), which allows people to look up different Domain Names. Once the IP address is had, it can be connected to through a connection route, which includes many hops across the network until the destination is discovered and connection established.

### Traceroute
You can determine the above mentioned hops using the traceroute console utility. If one were to use this, they would see first their home network’s IP address, followed by a series of devices, then the ISP (Internet Service Provider), a few other devices, and then the requested page. Different routes can be had, allowing for dynamic discovery and prevents failure if one route is shut down. 

### Network Internals
The actual act of sending data uses the TCP/IP model. This has four layers:
1. Application - things the user interacts with, like web browsing (ie, HTTPS)
2. Transport - Moving connection data packets (in small chunks) (ie.,TCP)
3. Internet - Establishing the actual connection (ie., IP)
4. Link - The physical connections needed to do this (ie., fibers and hardware)

## Domain Names
You can use the ‘dig’ command to find the IP addresses of a web page. Bigger web pages will use multiple redundant IP addresses in case one of them fails. Domain Names Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. You can create multiple subdomains for one root domain, and each subdomain can have different IP addresses. Using the ‘whois’ console utility, one can see information about the domain.

### DNS
Every DNS server references a few special DNS servers which are considered the authoritative name servers for association a domain name with an IP address. The main ways it does this that we are concerned with are the address (A) and canonical name (CNAME) records. An A record is a map from a domain name to IP address. A CNAME maps one domain name to another, acting as a domain name alias, so that two domains link to the same information. 

When you enter a name into the browser, it is resolved in the following steps:
1. The browser checks to see if it is in its cache of names already
2. If not, it contacts a DNS server and gets an IP address, since the DNS server keeps a cache of names.
3. If it does not have this name, it requests a name from the authoritative name server.
4. If this fails, you will get a unknown domain name error.
5. If any step succeeds, the browser makes an HTTP connection with the address.
There are a lot of levels of name caching, which can be frustrating if one is trying to update the information associated with a domain name. The time to live (TIL) setting makes these different layers clear their cache after a specific time has passed.

### Leasing Domain Names
You can lease a domain name. Obscure ones will be cheaper, which is why companies can have weird names these days. We will learn to do this.

## AWS Route 53

## Caddy

## HTTPS, TLS, and certificates
