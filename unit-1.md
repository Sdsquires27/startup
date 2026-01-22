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

## Caddy
Caddy is a service that listens for HTTP requests and then routes the request to another web service. We use Caddy in this course to create and rotate web certificates, allowing support for HTTPS. It will serve  up static HTML, CSS, and JavaScript files. It will also serve as a gateway for subdomain requests.
### Important Caddy Files
__Configuration file__ ~/Caddyfile
Contains definitions for routing HTTP requests that Caddy receives. You should never have to use this except for when setting up your domain name, but it is good to be aware of.
__HTML files__ ~/public_html
This is the directory of files that Caddy serves up when requests are made. 
### Proxy Servers
This is an intermediary between a server and a client. It handles requests and responses. There are two main types:
#### Forward Proxy
This sits in front of the client. It forwards client requests to external servers, and it helps filter content, provide anonymity, and bypasses restrictions.
#### Reverse Proxy
This sits in front of the server. It handles incoming server requests and reroutes them. This helps with load balancing, SSL termination, caching, and hiding backend architecture.

## HTTPS, TLS, and certificates
HTTP was very common in the early days of the web, but has since upgraded to full web pages. Because your computer’s information is going through so many different other computers, it is important that the information being sent is encrypted.
### HTTPS and TLS
Through TLS, HTTP can be secured by sharing a secret which is used to encrypt data. This is complex and involves exchanging a web certificate and identifying that this certificate contains the name of the domain. 
### Web Certificates
Web certificates are generated by a trusted 3rd party using public/private key encryption. The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate. This used to be very expensive, but a non-profit was launched in order to get trusted web certificates for free. Now, anyone can get a certificate, which has made the internet much safer and more reliable. 
### Enabling HTTPS
Modern browsers expect web servers to use HTTPS for all communication. The next version of HTTP will only support secure connections, so it is very important to support HTTPS.  In our case, we will use Caddy.
