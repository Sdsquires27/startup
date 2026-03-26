# Assorted Topics
## March 26
### TypeScript
TypeScript adds static type checking to JavaScript. This provides type checking while you are writing the code to prevent mistakes like using a string when a number is expected. This follows most normal data types, including null, undefined, and any. With typescript you explicitly define the types, and as the JavaScript is transpiled, an error will generate. You can define object types with the type keyword, or by implicitly creating an object property.
#### Interfaces
Because it is so common to define object property tpes, TypeScript introduced the use of the interface keyword to define a collection of parameters and types that an object must contain in order to satisfy the interface type. 
Beyond type checking
TypeScript also warns you of potential uses of an uninitialized variable, defining the possible values of a new type, and enumerations. 
#### Using TypeScript
TypeScript is automatically supported with Vite. Node LTS Version 22 introduced experimental use of TypeScript; it will be enabled by default in future versions. Version 24 handles TypeScript right out of the box. 
### Performance Monitoring
The performance of your application plays a huge role in determining user satisfaction. Small delays can decrease views, satisfaction, and conversions. This will require looking at Browser application latency, network latency, and service endpoint latency.
#### Browser Application Latency
Browser application latency is impacted by the speed of the user’s device, the amount of data that needs to be processed, and the time complexity of the algorithm. You can use compression when transferring files, reducing the quality of images and video, minifying JavaScript and CSS, and using newer versions of HTTP to compress things. It can also help to combine responses from multiple endpoint requests into a single request.
#### Network latency
There is a latency price for every network request that you make. It is affected by the amount of data that you send, the amount of data a user can receive per secont, and the distance the data has to travel. This can be mitigated by hosting your application files in data centers that are close to the users you are trying to serve. Applications trying to reach a global audience will often host their application from dozens of places around the world.
#### Service Endpoint Latency
Service endpoint latency is impacted by the number of requests that are made and the amount of time that it takes to process each request. 
#### Performance tools
You can use the Chrome network tab to see the network requests made by your application together with the time necessary for each request. You can also stimulate low bandwidth connections by throttling your network. This can be very helpful. Additionally, you can use the Chrome debugging Lighthouse tool to run an analysis of your application, the Performance tab to see how things are running, and global speed tests, such as on Pingdom.com. 