# HTTP Service
## February 24
### Web Servers
A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.
#### Monolithic Web Servers
In the early days of web programming, one would buy an extensive software program that could serve up HTML files and then install it on a hardware device. The package of server hardware and software was considered the web server because the web service software was the only thing running on the server. Eventually, open source web servers made it easy to host a website, but the software was still a separate program from the content, or application, it hosted
#### Combining web and application services
Today, most modern programming languages include libraries that make it easy to serve up web content. This removed the requirement to have a separate program for hosting your application. Instead, your application is also the web service. Consider this HTTP service written in JavaScript which can load up HTML content from a public directory.
```js
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(80);
```


Being able to easily create web services means taht we can completely drop the monolithic web server concept and just build web support right into your application. We can add web accessible methods called endpoints that provide functionality beyond simply serving up static HTML files, like adding things based on the path of the website. 
#### Web Service Gateways
It is common to find multiple web services running on the same computing device. The idea of having multiple services on a single server highlights the difference between a web service and a web server. A web server allows access to multiple services by referring to a different port number (like an address) for each service. Since it can be hard for the user to remember what port number matches which service, we introduce a service gateway (or reverse proxy), which is a simple web service that listens on the common HTTPS port 443. It then looks at the request URL and maps it to the other services running on other ports. We use Caddy as the gateway of our services.
#### Microservices
Web services that provide a single function purpose are referred to as microservices.This partitions large functionality into small logical chunks to develop and manage them independently from other functionality in a larger system. They can also handle large fluctuation in user demand, since you can just running more and more stateless copies of the microservice. 
#### Serverless
The idea of microservices evolved into the world of serverless functionality where the server is conceptually removed from teh architecture and you just write code that represents single service endpoint. That endpoint is loaded through a gateway that maps a web request to the endpoint. The gateway automatically scales the hardware needed to host the serverless endpoint based on demand. So, all that a web application developer needs to think about is a single independent endpoint.
### Web Services Introduction
Right now, your application is loaded from your web server and runs on the user’s browser. It starts when the browser requests index.html from the web server, which calls other things. All the files running on your browser are the frontend, which uses the HTTPS protocol. From here, we can make requests to external services which we then inject into the DOM for the user to read. To make this request, we supply the URL of the web service to the fetch function that is built into the browser. The next step we have is to create our own web service, which will provide the static frontend files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, executing application logic that you want to be private, and communicating with other users. This functionality represents the backend of your application. The functions provided are called endpoints or APIs. These can provide frontend calls to do things like get a user, create a user, or get high scores, and can also request things to other web services. 
#### URL
The Uniform Resource Locator represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter or gaming session. Here is the convention for the URL syntax (only the scheme and domain name are required):
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>


|Part|Example|Meaning|
|----|-------|-------|
|Scheme|https|The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.|
|Domain name|byu.edu|The domain name that owns the resource represented by the URL.|
|Port|3000|The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.|
|Path|/school/byu/user/8014|The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.|
|Parameters|filter=names&highlight=intro,summary|The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.|
|Anchor|summary|The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.|

Technically, you could also provide a user name and password before the domain name; this was done historically but is done no longer for security reasons. You will see this conventino for URLs that represent database connection strings.
#### URL, URN, and URI
You will sometimes hear the use or URN or URI when talking about web resources. A Uniform Resource Name is a unique resource name that does not specify location information. A Uniform Resource Identifier is a general resource identifier that could refer to either a URL or a URN. With web programming URLs are almost always being referred to, and the more general URI should not be used.
#### Ports
When you connect a device to the internet you need btoh an IP address and a numbered port. These numbers allow a single device to support multiple protocols as well as different types of services. The ports may be exposed externally or only used internally. The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols, so a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities, but it is very common for these ports to be used by services running internally on the device. Ports 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. Here are some common ports:

|Port|Protocol|
|----|--------|
|20|File Transfer Protocol (FTP) for data transfer|
|22|Secure Shell (SSH) for connecting to remote devices|
|25|Simple Mail Transfer Protocol (SMTP) for sending email|
|53|Domain Name System (DNS) for looking up IP addresses|
|80|Hypertext Transfer Protocol (HTTP) for web requests|
|110|Post Office Protocol (POP3) for retrieving email|
|123|Network Time Protocol (NTP) for managing time|
|161|Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers|
|194|Internet Relay Chat (IRC) for chatting|
|443|HTTP Secure (HTTPS) for secure web requests|

#### Your Ports
When building your web server, you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication. Your web service, Caddy, is listening on ports 80 and 443. When it gets a request on port 80, it automatically redirects the request to port 443. It examines the path defined by the URL and if the path matches a static file, it reads the file off disk and returns it; if it matches one of teh definitions it has for a gateway service, it makes a connection on that service’s ports and passes the request to the service. Internally, you can have as many web services running as you would like, but each must use a different port to communicate on. Simon is run on 3000, so you cannot use 3000--instead you use port 4000 for your startup service (it doesn’t matter what high range port you use, only that you are consistent and that they are only used by one service).

### HTTP
Hypertext Transfer Protocol (HTTP) is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. We will now talk about the internals of HTTP. You can see the requests and responses between a web client and web server using a console tool like curl--you could make this request in your console, fos instance:
curl -v -s 
http://info.cern.ch/hypertext/WWW/Helping.html
An HTTP request has this general syntax:
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
The response has this syntax:
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]

It is similar, with small differences.
#### Verbs
Here are some common verbs that describe what the HTTP request is asking for. 
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.
|Verb|Meaning|
|----|-------|
|GET|Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.|
|POST|Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.|
|PUT|Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.|
|DELETE|Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.|
|OPTIONS|Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.|

#### Status Codes
It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. Here are the five blocks these are partitioned to:
- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within these ranges there are some common codes, such as these:

|Code|Text|Meaning|
|----|----|-------|
|100|Continue|The service is working on the request|
|200|Success|The requested resource was found and returned as appropriate.|
|201|Created|The request was successful and a new resource was created.|
|204|No Content|The request was successful but no resource is returned.|
|304|Not Modified|The cached version of the resource is still valid.|
|307|Permanent redirect|The resource is no longer at the requested location. The new location is specified in the response location header.|
|308|Temporary redirect|The resource is temporarily located at a different location. The temporary location is specified in the response location header.|
|400|Bad request|The request was malformed or invalid.|
|401|Unauthorized|The request did not provide a valid authentication token.|
|403|Forbidden|The provided authentication token is not authorized for the resource.|
|404|Not found|An unknown resource was requested.|
|408|Request timeout|The request takes too long.|
|409|Conflict|The provided resource represents an out of date version of the resource.|
|418|I'm a teapot|The service refuses to brew coffee in a teapot.|
|429|Too many requests|The client is making too many requests in too short of a time period.|
|500|Internal server error|The server failed to properly process the request.|
|503|Service unavailable|The server is temporarily down. The client should try again with an exponential back off.|

#### Headers
HTTP headers specify metadata about a request or response. These include things lke how to handle security, caching, data formats, and cookies. Here are some common headers:

|Header|Example|Meaning|
|-----|--------|-------|
|Authorization|Bearer bGciOiJIUzI1NiIsI|A token that authorized the user making the request.|
|Accept|image/*|The format the client accepts. This may include wildcards.|
|Content-Type|text/html; charset=utf-8|The format of the content being sent. These are described using standard MIME types.|
|Cookie|SessionID=39s8cgj34; csrftoken=9dck2|Key value pairs that are generated by the server and stored on the client.|
|Host|info.cern.ch|The domain name of the server. This is required in all requests.|
|Origin|cs260.click|Identifies the origin that caused the request. A host may only allow requests from specific origins.|
|Access-Control-Allow-Origin|https://cs260.click|Server response of what origins can make a request. This may include a wildcard.|
|Content-Length|368|The number of bytes contained in the response.|
|Cache-Control|public, max-age=604800|Tells the client how it can cache the response.|
|User-Agent|Mozilla/5.0 (Macintosh)|The client application making the request.|

#### Body
The format of the body of an HTTP request or response is defined by the Content-Type header. 
#### Cookies
HTTP itself is stateless; one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header and is returned on subsequent requests. This allows the server to remember things like the language preference of the user, or the user’s authentication credentials. A server can also use cookies to track, and share, everything that a user does. There is nothing inherently evil about cookies, but they can be used poorly.
#### HTTP Versions
Here is the evolution of HTTP:

|Year|Version|Features|
|----|-------|--------|
|1990|HTTP0.9|one line, no versions, only get|
|1996|HTTP1|get/post, header, status codes, content-type|
|1997|HTTP1.1|put/patch/delete/options, persistent connection|
|2015|HTTP2|multiplex, server push, binary representation|
|2022|HTTP3|QUIC for transport protocol, always encrypted|

### Fetch
The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages to one of web applications. Today, the fetch API is the preferred way to make HTTP requests. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the object to convert it to a JavaScript object.
