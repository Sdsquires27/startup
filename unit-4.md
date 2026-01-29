# JavaScript and Web Frameworks
## January 29
### JavaScript Introduction
Officically called ECMAScript, JavaScript is a weakly typed language based on concepts found in C, Java, and Scheme. This script runs on every web browser and is a commonly used as a web server language or to create serverless functions. Note that JavaScript is interpreted at runtime instead of being compiled, allowing for runtime errors.
#### JavaScript Versions
Like the other services we have used, JavaScript has a specific version history which is important to be aware of to ensure browser compatibility.
#### Getting Started
The first line will concatenate three strings together and throw away the result , whereas the second will output the string to the debugger console:
```javascript
‘Hello + ‘’ + ‘world’;
console.log(‘Hello + ‘’ + ‘world’);
```
You can also write functions using the function syntax. As with other languages, you can use // to comment things out on a line or /* … */ to comment out a block. Use semicolons to end a line and curly braces to define a code block and scope. You can use CodePen or a browser to easily run JavaScript.
#### Adding JavaScript to HTML
You can insert JavaScript into HTML through directly including it with a ‘<script>’ element, using ‘src’ attribute of the script element to reference an external JavaScript file, or putting JavaScript directly inline as part of an event attribute handler. Take this code, for example:

index.js:
```javascript
function sayHello() {
  alert("Hello");
}
```

index.html:
```html
<!-- external script -->
<head>
  <script src="index.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>

  <!-- internal script block -->
  <script>
    function sayGoodbye() {
      alert("Goodbye");
    }
  </script>

  <!-- inline attribute handler -->
  <script>
    let i = 1;
  </script>
  <button onclick="alert(`i = ${i++}`)">counter</button>
</body>
```
### Node.js
Node.js was the first successful application for deploying JavaScript outside of a browser, which changed the mindset from just a browser technology into something that could be run on the server as well, meaning that it could power an entire technology stack--one language to rule them all. This will need to be installed in a development environment to be used. 
The main steps for implementing this are:
1. Create your project directory
2. Initialize it for use with NPM by running npm init -y
3. Make sure .gitignore file contains node_modules
4. Install any desired packages with npm install <package name here>
5. Add require(‘<package name here>’) to your application’s JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with node index.js

### Debugging JavaScript
The easiest way to debug, as with other languages, is by live printing to your console through console.log() Run the code in VS Code Live Server, open the Chrome browser debugger (press F12), Select the console tab and refresh the browser in order to see the things logged. This will allow you to see variables without using console.log. Selecting the ‘source’ tab instead will display the source files that comprise the currently rendered content. You can then create breakpoints and refresh the browser to run the script again with the breakpoints. 

### Debugging Node.js
You can use debugging tools built into VS Code to debug JavaScript in VS Code by executing the ‘Start Debugging’ command by pressing F5 and selecting Node.js as the debugger you want to use. Again, you will be able to see things printed to the console and set breakpoints.
#### Node --watch
The node --watch option causes Node to watch your source code files and automatically reload itself if anything changes, allowing for faster debugging. You could also create a launch configuration that includes the launch parameter by writing code similar to the following:
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "runtimeArgs": ["--watch"],
      "program": "${workspaceFolder}/main.js"
    }
  ]
}
```
