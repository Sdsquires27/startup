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
## February 2
### Web Frameworks
Web frameworks make teh job of writing web applications easier by providing tools for completing common application tasks, such as modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices. Some of these create hybrid file formats that combine HTML and JavaScript into a single file, which includes React, JSX, Vue SFC, and Svelte. By abstracting away the core web file formats, the focus is put on functional components rather than files. Different framekworks have different advantages and disadvantages--some are very prescriptive, some have major institutinoal backing, and some have a strong open source community.

### Toolchains
As web programming becomes more and more complex it became necessary to abstract away some of that complexity using tools. Here are some common functional pieces in a web application:
Code repository - Stores code in a shared, versioned location.
Linter - Removes, or warns of, non-idiomatic code usage.
Prettier - Formats code according to a shared standard.
Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
Testing - Automated tests at multiple levels to ensure correctness.
Deployment - Automated packaging and delivery of code from the development environment to the production environment.
The toolchain we use for our React project consists of GitHub as the code repository, Vite for JSX, TS, development and debugging support, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash dscript for deployment. Understanding all of these isn’t necessary to making the website, but will help optimize further development efforts. 
### Vite
In order to use most web frameworks you need to include a full web framework toolchain that allows you to use JSX, minifcation, polyfills, and bundling. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interace to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application. For our tooolchain we will use Vite. 
### React
React got its name because it reacts based on user interactions and changes in the underlying data. It abstracts HTML into a JavaScript variant called JSX. 
### Components
React components allow you to modularize the functionality of royu application, which allows the underlying code to directly represent the components that a user interacts with. 
### Router
A web framework router provides essential functionality for single-page applications that otherwise would have been handled by rendering multiple HTML pages. For instance, the headers, footers, navigation, and common components either will have to be duplicated in each HTML page or injected before the server sends teh page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages, which has the advantage of being able to store state as the user interacts with a page and not having to continually go to the server to get new HTML pages. 

## February 10
### JavaScript Console
The JavaScript console object provides interaction with the JavaScript runtime’s debugger console. This is different than an operating system’s console, and is useful for debugging scripts.
#### Log
Log is a basic way to output messages, using console.log(). You can format this and can specify CSS declarations within the text.
#### Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls, and it will output the duration between the time and timeEnd calls. 
#### Count
To see how many times a block of code is called you can use the count function.
### Functions
In JavaScript functions are first class object, which means they can be given a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable. They are declared by the function keyword, zero or more parameters and then zero or more return statements, which returns a single value. There is no type declaration, as the type is inferred by the assignment of the value to the parameter.
#### Function Parameters
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided, the value of hte parameter is undefined when the function executes. As in other languages, this can be explicitly passed into the function or given a default value.
#### Anonymous functions
Functions in JavaScript are commonly assigned to a variable so they can be passed as parameter to some other function or stored as an object variable. You can define a function anonymously and assign it to a variable. This can be done in a lambda function, which will be covered in the next lesson.
#### Creating, passing, and returning functions
This is all possible

#### Inner functions
Like other languages, helper functions can be declared within other functions. This can help modularize code without exposing proviate details of the code.
### Arrow Functions
Because functions are first order objects in JavaScript, they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. The arrow syntax makes this simple by replacing the need for the function keyword with the symbol => placed after the parameter declaration. The enclosing curly braces are also optional. This function, for instance, takes no parameters and always returns three:
```js
() => 3;
```

This method is compact, but also includes semantic differences, including how a return value is specified and the scope of variables that an arrow function can access.
#### Return Values
The return keyword is optional if no curly braces are provided and it contains a single expression. If this is the case, the result of the expression is automatically returned. If curly braces are provided, the return value should be included.
#### Closure
Arrow functions inherit the ‘this’ pointer from the scope in which they are created. This makes what is known as closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This is a valuable when we do things like execute JavaScript within the scope of an HTML page. This is because it remembers the values of variables that were in scope when the function was created.
#### Using Arrow functions with React
React components are a great place to learn how to use arrow functions. Arrow functions allow logic to be moved directly into the JSX. However, problems can come up with asynchronous functions, which can cause variables to be changed multiple times. 
### Arrays
JavaScript arrays represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index, and it can be constructed using the Array constructor or array literal notation. 
### Objects and classes
A JavaScript object represents a collection of name value paris referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance. Objects are created using the code ‘new Object’, which is followed by the properties that are meant to be associated with it. These can then be referenced using either a dot or a bracket. Objects can refer to standard JavaScript objects or this JavaScript Object object, or an object created. 
#### Object literals
You can declare a variable of object type with the object-literal syntax, which allows you to provide the initial composition of the object:
```js
const obj = {
  a: 3,
  b: 'fish',
  c: [1, true, 'dog'],
  d: { e: false },
  f: function () {
    return 'hello';
  },
};
```

#### Constructor
Any function that returns an object is considered a constructor and can be invoked with the new operator. Because operators can have any type of property value you can create methods on the object as part of its encapsulation.
#### This pointer
‘this’ depends on the scope in which it is being used, but in the context of an object it references the object itself.
#### Classes
You can use classes to define object. This defines the intent to create a reusable component rather than a one-off object. It looks similar to creating an object, but classes have an explicit constructor and assumed function declaration. For example:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties private by prefixing them with a ‘#’.
#### Inheritance
Classes can be extended by using the ‘extends’ keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the ‘super’ function. Functions with the same name are overwritten, and the parent’s functions can be accessed using the super keyword. 
### Destructuring
Destructuring is the process of pulling individual items of an existing one, or removing structure. This can be done with arrays as well as objects, which can be helpful when you only care about a few items of the original structure. This is used extensively in React. It is done as such with arrays:
```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
Or:
```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]


And as such with objects:
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

#### Destructuring in React
React makes extensive use or destructuring when you want to pass parameters to components and create state. In the example below, React passes all the parameters to the component as an object, but the object is destructured to just the initialCount parameter. Likewise, the return value from React.useState destructures the array to just the variable and the update function.
```js
function Clicker({ initialCount }) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker initialCount={3} />);
```

### Time and interval
#### setTimeout
It is common to want to delay the execution of something. This can be done with the setTimeout function, which takes a function that will be called once the given millisecond delay has passed. Note that the rest of the vode continues to execute.
#### setInterval
If you need to execute a block of code periodically at a given time interval, setInterval does so. You cann cancel this using the clearInterval function. 
### Hooks
React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. useState is an example of this. 
#### useEffect hook
The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time a component completes rendering, do this:
```js
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookDemo />);
```
#### useEffect dependencies
This is usually called every time the component is rendered. You can control what triggers a useEffect hook by specifying its dependencies. 
#### useEffect clean up
You can take action when the component cleans up by returning a cleanup function when you call useEffect. 
### Reactivity
One of the architectural foundations of React is making the UI react to changes in User Input or data. This can be done through props, state, and render. React keeps a table of state values for every component. React records requested state in the table whenever a updateState method is called. Then periodically, React will rerender every component that has had a change since the last render occurred.
### JSON
JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! It provides a simple and yet effective way to share and store data. It is easily convertible to and from JavaScript objects. This makes it a very convenient data format when working with web technologies. These are the data types that a JSON document contains:

|Type|Example|
|----|-------|
|string|"crockford"|
|number|42|
|boolean|true|
|array|[null,42,"crockford"]|
|object|{"a":1,"b":"crockford"}|
|null|null|

Most commonly, a JSON document contains an object, which include key value paris.
### LocalStorage
The browser’s localStorage API provides the ability to persistently store and retrieve data on a user’s browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user’s name on one HTML page, and then retrieve the name later when a different HTML page is loaded. This name will also be available in local storage the next time the same browser is used to access the same website. localStorage is also used as a cache for when data cannot be obtained from the server.
#### How to use LocalStorage
There are four main functions that can be used:

|Function|Meaning|
|--------|-------|
|setItem(name, value)|Sets a named item's value into local storage|
|getItem(name)|Gets a named item's value from local storage|
|removeItem(name)|Removes a named item from local storage|
|clear()|Clears all items in local storage|

A local storage value must be of type string, number, or boolean. 
