# CS 260 Notes

[My startup - Something]()

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Unit Notes
- [Google Docs](https://docs.google.com/document/d/1XpXUGv5KVJ9QYtvr1PP064hiIasfq4PtMAP1Pm6ZnTg/edit?tab=t.0)
- [Unit 0](unit-0.md)
- [Unit 1](unit-1.md)
- [Unit 2](unit-2.md)
- [Unit 3](unit-3.md)
- [Unit 4](unit-4.md)

## AWS

My IP address is: 3.213.133.247

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

It was difficult to get the icon working--for some reason the .ico file wasn't doing it. Other than that, it's been fine.

## CSS

This is taking more time than I've expected, but is going well. Familiarizing myself with the different elements of Bootstrap has been somewhat difficult, but not terrible. It's been fun to make things react and formatting things. It seems like making a page can take a lot of precision, but has a huge payoff in terms of how good it makes things look and feel for the user.

## React Part 1: Routing



## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```

# Unit Notes:
# Unit 0 Notes
CS 260
## Introduction
### Well Rounded Software Engineers
In order to become an exceptional software engineer, you need to excel in the following four areas: capable, creative, collaborative, curious. 
Capable entails knowing the technology and being able to use it well.
_Creative_ means making things that are usable, efficient, and maintainable. Knowing how to organize and sculpt code is incredibly creative.
__Collaborative__ is important because an application is generally built by a team, and having social skills will greatly determine your success
__Curious__ means to accept more than just a job, but looking into why the job is important and useful, searching for alternative directions, and digging into the inner workings of a black box.

### Christlike Learning
An overarching quality that is important is Christlike, which includes having gratitude, focusing on divine inspiration, and having an eternal perspective.
### Making Mistakes
Making mistakes is a key component for learning. Recognize and embrace the power of making mistakes. Many important discoveries have come out of making mistakes, and it will be helpful to make mistakes in a good way--make notes, have peers, and make sure you can replicate your mistakes. Approach new things with the expectation of making mistakes.
### Welcome to ‘Startup 260’
This class has the energy of a startup - build applications to change the world, have no funding, work long hours.

## Why Am I Here?
Consider two questions: What do I want? What am I willing to do?
### Motivation: What do I want?
There are many different levels of motivation. They include:
__Unfocused__: I need to do something. It might as well be this.
__Badge__: I need credits towards graduation or getting a job.
__Exploration__: I am curious about this
__Mastery__: I want this as one of my core abilities
__Leader__: I want to be a leader in this space.

### Investment: What am I willing to do?
Motivation determines your level of investment and what you will get out of it. For each level of motivation, there is a spectrum of possible investment.

### Enjoy the Journey
The destination is a byproduct of the journey and what you’ve learned along the way. If the journey feels overwhelming, remember your motivation and your progress. Focus one step at a time.

### Deliverable
I want to immeribly lead; I wish to complete 125% of deliverables, study all instruction, actively participate in class, engage beyond instruction, creatively explore new directions, be driven by curiosity to explore, collaborate with others, and seek inspiration and eternal application.

## GitHub
### readme.md
This class will require taking notes using the README.md file as well as using the notes.md file. The notes.md file will be usable on the midterm and final.
### Forks
A fork allows you to create a copy of a repository. One forks a repository in order to experiment with or contribute to a open source code base. 
### Creating a History of your work
Much of this course will revolve around the startup github repository, created later in this assignment. This is used for backup, portfolio, proof of work, exploration, and experience. This requires students to commit often--students should make a small stable change and then commit. 

## Asking Questions

### How to ask questions
Before asking any question, make sure you do these things first:
- Have read deliverable specifications thoroughly. Sometimes this means 3 – 4 times.
- Work at solving the problem on your own for at least 30 minutes.
- Use unit tests to help you debug your problems.
- Read the course instructional content before asking questions.
- Try consulting the API documentation first.
- Debug your code using the IDE.
- Write, run, and be able to justify the effectiveness of your own test cases.
- Attend every class.
- Have a well-formed question to ask the TA.
- Put yourself in a frame of mind to accept new ideas.
Remember one purpose of this class is for you to learn how to learn. If the TA feels you are not putting forth your full, they may ask you to return later when you have fulfilled these requirements.
Pay forward any help you get.

## The Console
This is the command line, a simple in-out console that allows one to type commands to receive responses.

### Viewing the File System
You can see where you currently are using the pwd command. You can see all the files within the current directory using the ls command. 

### Executing Commands
Other commands include:
- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual
You can also do specific things with the input or output using these special characters:
- | - Take the output from the command on the left and pipe, or pass, it to the command on the right
- /> - Redirect output to a file. Overwrites the file if it exists
- />> - Redirect output to a file. Appends if the file exists

## History of the Web
The history of the web can be defined in three general phases:
1. The formation of the internet that supports the communication of web applications
2. The creation of HTML and HTTP that made it possible to shared hyperlinked documents (Web 1.0).
3. The creation of CSS and JavaScript that enabled interactive web applications (Web 2.0).
### The Internet
The first step into web programming was the creation of a global communications network that was public and reliable. ARPANET was created by the US government as a means of sharing information between universities in order to withstand nuclear attack. Two computers created a path between each other through a single authority. 
In the 1980s, development was made in this system, creating the internet, which had major expansions in the 1990s and the 2000s. 

### Hypertext Markup Language
Tim Berners-Lee was assigned to create a system that would allow researchers to share documents between remote academic institutions. He created the underpinnings of what became known as Hypertext Markup Language (HTML), which was revolutionary in part due to its use of hyperlinks, which would allow one to reference another page within it. 
HTTP and URL
Berners-Lee also invented HyperText Transfer Protocol (HTTP) and Uniform Resource Locator (URL), which define how web documents are addressed and transmitted across the web.

### Cascading Style Sheets
CSS was proposed as a way to provide styling apart from the browsers reading HTML files, and this has since become the standard, with additional development. 

### JavaScript
JavaScript changed the static web page into a dynamic one, based on a user’s interaction with the page.

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

# HTML
## January 20
### CodePen
CodePen is an important application which will immediately render written code in a preview window, which will allow you to make small changes and see the results immediately. When working with assignments, do the following:
1. Either create  new pen or fork an existing one
2. Conduct the experiment as defined by the assignment
3. Save your assignment periodically
4. Submit the pen’s URL in Canvas together with a description of something you learned. 

#### Assignment
[My CodePen](https://codepen.io/Sdsquires27/pen/JoKyjMR)

### HTML introduction
HTML provides the foundational content structure that all web applications build on. HTML was originally designed to be a publishing format for web documents, or pages. Now, we use web applications, which are either single paged or multi-paged. To make an application, we will need to use CSS as well as JavaScript, but we will start with HTML.
#### Elements and Tags
HTML elements are represented with enclosing tags that may enclose other elements or text. For example, to make a paragraph, you tag it with (p) to show that it is a structural paragraph of text. Tags are delimited using <> and closing tags will have a / before its name:

<p>Hello world</p>

We can continue adding structures to the page with additional elements, each of which may contain other elements to create an overall structure. The <html> element is the top level page structure, and <head> contains metadata about the page and title. <body> is content structure and <main> is main content structure (as part of the <body>). Even if we were to write a lot:
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>

It would still render the same, since it’s almost entirely about structure. The visual appearance won’t change until we start to use CSS.

#### Attributes
Each element may have attributes, which describe specific details of the element. id, for instance, gives a unique id to the element in order to distinguish it. ‘class’ designates the element as being classified into a named group of elements. They are written inside the element tag with a name followed by an optional value:
<p id="hello" class="greeting">Hello world</p>

#### Hyperlinks
One of the most essential aspects of the web is the ability to create a hyperlink to take you from one page to another with a simple click. This is represented by the anchor (a) element with an attribute containing the address of the hyperlink reference (href). For instance:
<a href="https://byu.edu">Go to the Y</a>

#### Complete example
HTML defines a header (<!DOCTYPE html>) that tells the browser the type and version of the document, which should always be included at the top of the HTML file. 

#### Common Elements
html
The page container
head
Header information
title
Title of the page
meta
Metadata for the page such as character set or viewport settings
script
JavaScript reference. Either a external reference, or inline
include
External content reference
body
The entire content body of the page
header
Header of the main content
footer
Footer of the main content
nav
Navigational inputs
main
Main content of the page
section
A section of the main content
aside
Aside content from the main content
div
A block division of content
span
An inline span of content
h<1-9>
Text heading. From h1, the highest level, down to h9, the lowest level
p
A paragraph of text
b
Bring attention
table
Table
tr
Table row
th
Table header
td
Table data
ol,ul
Ordered or unordered list
li
List item
a
Anchor the text to a hyperlink
img
Graphical image reference
dialog
Interactive component such as a confirmation
form
A collection of user input
input
User input field
audio
Audio content
video
Video content
svg
Scalable vector graphic content
iframe
Inline frame of another HTML page


#### Comments
Comments can be inserted by starting the comment with <!-- and ending with -->. Any text within the comment will be entirely ignored.
#### Special Characters
There are several characters reserved for defining its file format. If you want to use the characters you will need to escape them using the entity syntax, as follows: 

Character
Entity
&
\&amp;
<
\&lt;
\>
\&gt;
"
\&quot;
'
\&apos;
😀
\&#128512;

#### HTML Versions
Understanding when different HTML features were introduced helps you know what has been around.  Newer features might not be as stable. Here are some key features:
HTML1, 1990, format tags
HTML2, 1995, tables and internationalization
HTML3, 1997, MathML, CSS, frame tags
HTML4, 1999, external CSS
HTML5, 2014, email, password, media, semantic tags

#### index.html
By default, a web server will display the HTML file named index.html when a web browser makes a request without asking for a specific HTML file. For this reason, it is very common to name the main HTML file for your web application index.html
#### Rendering HTML
You can save any HTML file to your computer’s disk and then open the file using your browser. You can also open the file in VS Code and use the Live Server extension to display the HTML. CodePen is also a sandbox that will allow you to easily play with HTML.

### Structure
The two major purposes of HTML is to provide structure and content to your web application. The body element has three children: a ‘header’, ‘main’, and ‘footer’. Each of the body children then contains other structural content. It is important that this structure is represented correctly so that programmers as well as web crawlers and accessibility readers can interpret the document correctly.
#### Block and inline
A block element is meant to be a distinct block in the flow of the content structure. An inline element is meant to be inline with the content flow of a block element. These are elements within the larger element, such as a ‘b’ element within a ‘div’ element.
#### Assignment
[CodePen](https://codepen.io/Sdsquires27/pen/gbMxpmP)

### Input
| Element        | Meaning           |
| ------------- |:-------------:|
| form      |Input container and submission|
| field-set      |Labeled input grouping|
| input |Multiple types of user input       |
| select |Selection dropdown       |
| opt-group |Grouped selection dropdown       |
| option |Selection option       |
| textarea |Multiline text input       |
| label |Individual input label       |
| output |Output of input       |
| meter |Display value with a known range       |

In order to create an input you specify the desired type attribute along with any other attribute associated with that specific input. Most share these attributes:

| Attribute        | Meaning           |
| ------------- |:-------------:|
| name      |The name of the input. This is submitted as the name of the input if used in a form|
| disabled     |Disables the ability for the user to interact with the input|
| value |The initial value of the input       |
| required |Signifies that a value is required in order to be valid       |


They will look clunky, but we can style them later using CSS. 


#### Validating Input
Several input elements have validation built into them. They will not accept a value that is not what you want it to be. You can specify the required attribute on an input element to mark it as requiring a value before it can be submitted. The pattern attribute exists on text, search, url, tel, email, and password inputs. When present, the pattern attribute provides a regular expression tha tmust match for the input to be considered as valid. Validation should also be done through JavaScript. 

#### Assignment
[CodePen](https://codepen.io/Sdsquires27/pen/RNRZWPp)

### Media
The HTML elements that represent media include ‘img’, ‘audio’, ‘video’, ‘svg’, and ‘canvas’. The first three are references to an external file, but ‘svg’ and ‘canvas’ can render a visual image that can be animated.
#### External Media
The media tags that reference external media take a URL as an attribute. This can be a relative path (served from the same location as the HTML path rendering the element) or a full path.
##### Image
To include an image, use the ‘img’ element and specify the ‘src’ attribute with the URL to the source image. 
##### Audio
To include audio, use the ‘audio’ element and specify the ‘src’ attribute with the URL to the source audio file. You can include the ‘controls’ attribute if you want the user tobe able to control the audio playback. If you do not include this, there will be no visual representation of the audio. The ‘autoplay’ attribute starts teh audio playing as soon as the audio file is loaded, and the ‘loop’ attribute keeps it playing over and over. It is disencouraged to use ‘autoplay’ without allowing the user to opt-in or opt-out of such.
##### Video
To include a video, use the ‘video’ element and specify the ‘src’ attribute with the URL to the source image. You can also use ‘controls’ and ‘autoplay’.
#### International Media
The international media elements ‘svg’ and ‘canvas’ allow you to actually create images directly with your HTML. SVG allows you to render graphics inline in your HTML. Canvas allows 2D drawing and animation, but requires JavaScript support. 

#### Assignment
[CodePen](https://codepen.io/Sdsquires27/pen/zxBdvzx)

# CSS
## January 22
### CSS introduction
CSS converts the structure and content of HTML into a vibrant, responsive experience. The initial objective of CSS was to simply style the HTML based on the desire of the suer, developer and browser. In modern web applications CSS styling focuses more on helping the developer content that is responsive to the actions of the user and the device the application is rendered on. It is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the property value. 
For example, consider the following rule:
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
The p selector selects all paragraph elements in the HTML document.
#### Associating CSS with HTML
There are three ways you can associate CSS with HTML. The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations.
<p style="color:green">CSS</p>

The next way to associate CSS is to use the HTML style element to define CSS rules within the HTML document. The style should appear in the head element so that the rules apply to all elements.

The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document. This is the preferred way to define CSS.
#### Cascading styles
Because elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times. The rules cascade down from the highest nodes in the DOM tree to the lowest level--any declaration defined at a lower level will override the higher declaration. It will also depend on the type of declaration. The general order of precedence are:
Inline styles
ID selectors
Class selectors, attribute selectors, and pseudo-classes
Element selectors
Universal selector and inherited styles
#### The Box Model
CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box. Within an element’s box there are several internal boxes. The innermost holds the element’s content. This is where the text or image is displayed. Next comes padding, which will inherit things like background color. After padding is the border, which has properties lke color, thickness and line style. The final is the margin, which is considered external to the actual styling of the box and therefore only represents whitespace. You can change the box-sizing CSS property from the default value of content box to border-box in order to redefine the width and height to also include the padding and the border. 
#### CSS versions
Like HTML, CSS has evolved significantly. It is important to note when things were added to know how stable a feature is. Since CSS3, released in 1999, the specification was divided into modules so they could be implemented at different levels of maturity.

### Selectors
The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to. The CSS rule selector can take many forms. In order to explain the most common selectors we need some demonstration HTML. By default every browser defines a base set of styles that it applies to all HTML. This varies slightly, but most are largely the same.
#### Element Type Selector
Tos tart things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the body element we will cascade our declaration down to all the children of the body. The wildcard name selector (*) can also be used to select all elements. We can also use element name selectors to give a bottom border to the top level heading (h1), as well as modify the section elements to pop out with a gray background and some white space in the padding and margins. 

#### Combinators
Next we want to change the color of the second level headings (h2) but we only want to do that within the sections fo reach department. This can be done through a ‘descendant combinator’ which is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So, our selector would be all h2 elements that are descendants of section elements. 
section h2 {
  color: #004400;
}

| Combinator        | Meaning           |Example |Description |
| ------------- |:-------------|:-------------|:-------------|
| Descendant      |A list of descendants|body section|Any section that is a descendant of a body|
| Child      |A list of direct children|section > p|Any p that is a direct child of a section|
| General sibling |A list of siblings|div ~ p|Any p that has a div sibling|
| Adjacent sibling |A list of adjacent sibling |div + p|Any p that has an adjacent div sibling|

For instance, we could use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading. 
#### Class Selector
The next selector we will use is the class selector (‘.summary{}’, where summary is the class)). Remember that any element can have zero or more classifications applied to it. One could combine the element name and class selectors to select all paragraphs with a class of summary, like ‘p.summary{}’
#### ID Selector
ID selectors reference the ID of an elements. Since all IDs should be unique, this will target a specific element. Use the # symbol followed by the id to do so. 
#### Attribute Selector
Attribute selectors allow you to select elements based on their attributes. You could use this to select any element with a given attribute (a[href]). You could also specify a required value for an attribute (a[href= “./fish.png”]) in order for the selector to match. These also support wildcards such as the ability to select attribute values containing the specific text (p[href*=”https://”])
#### Pseudo Selector
CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. For instance “section:hover” would cause the effect written to take place when the mouse hovers over the text within ‘section’.

### Declarations
CSS rule declarations specify a property and value to assign when teh rule selector matches one or more elements. There are tons of possible properties, but here are some of the most common ones:

| Property        | Value           |Example |Discussion |
| ------------- |:-------------|:-------------|:-------------|
| background-color      |color|red|Fill the background color|
| border      |color width style|#fad solid medium|Sets the border using shorthand where any or all of the values may be provided|
|border-radius|unit|50%|The size of the border radius|
|box-shadow|x-offset y-offset blu-radius color|2px 2px 2px gray|Creates a shadow|
|columns|number|3|Number of textual columns|
|column-rule|color width style|solid thin black|Sets the border used between columns using border shorthand|
|color|color|rgb(128, 0, 0)|sets the tet color|
|cursor|type|grab|sets the cursor to display when hovering over the element|
|display|type|none|Defines how to display the element and its children|
|filter|filter-function|grayscale(30%)|Applies a visual filter|
|float|direction|right|Places the element to the left or right in the flow|
|flex|||Flex layout. Used for responsive design|
|font|family size style|Arial 1.2em bold|Defines the text font using shorthand|
|grid|||Grid layout. Used for responsive design|
|height|unit|.25em|Sets the height of the box|
|margin|unit|5px 5px 0 0|Sets the margin spacing|
|max-[width/height]|unit|20%|Restricts the width or height to no more than the unit|
|min-[width/height]|unit|10vh|Restricts the width or height to no less than the unit|
|opacity|number|.9|Sets how opaque the element is|
|overflow|[visible/hidden/scroll/auto]|scroll|Defines what happens when the content does not fit in its box|
|position|[static/relative/absolute/sticky]|absolute|Defines how the element is positioned in the document|
|padding|unit|1em 2em|Sets the padding spacing|
|left|unit|10rem|The horizontal vlaue of a positioned element|
|text-align|[start/end/center/justify]|end|Defines how the text is aligned in the element|
|top|unit|50px|The vertical value of a positioned element|
|transform|transform-function|rotat(0.5turn)|Applies a transformation to the element|
|width|unit|25vmin|Sets the width of the box|
|z-index|number|100|Controls the positioning of the element on the z axis|

#### Units
You can use a variety of unites when defining the size of a CSS property. This can be absolute, a percentage of a parent element or screen, or even a multiplier of the size of the letter m. Here is a list of some units:

| Combinator        | Meaning           |
| ------------- |:-------------|
|px|The number of pixels|
|pt|The number of points (1/72 of an inch)|
|in|The number of inches|
|cm|The number of centimeters|
|%|A percentage of the parent element|
|em|A multiplier of the width of the letter in the parent font|
|rem|A multipler of the width of the letter m in the root's font.|
|ex|A multiplier of the height of the element's font|
|vw|A percentage of teh viewport's width|
|vh|A percentage of the viewport's height|
|vmin|A percentage of the viewport's smaller dimension|
|vmax|A percentage of the viewport's larger dimension|

#### Color
CSS defines multiple ways to describe color, ranging from ones that are familiar to programmers to ones that are familiar to layout designers and artists. 

| Method |Example           |Description |
| ------------- |:-------------|:-------------|
|keyword|red|A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)|
|RGB hex|#00FFAA22 or #0FA2|Red, green, and blue as a hexadecimal number, with an optional alpha opacity|
|RGB function|rgb(128, 255, 128, 0.5)|Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage|
|HSL|hsl(180, 30%, 90%, 0.5)|Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is.|

### Fonts
It is very important to choose an appropriate font. A beautiful modern font will make your app enjoyable to use, whereas a hard to read font, an overused font, or too many fonts will turn users away. The CSS font-family property defines what fonts should be used. It represents an ordered list of fonts. The first font in the list which is available will be used. Its important to have a list because different operating systems have different default fonts and your first choice may not be available. 
#### Font Families
There are four major families of fonts: Serif, sans-serif, fixed, and symbol. Fixed fonts have characters ofone size, and symbol fonts represent non-language characters.
#### Important fonts
In addition to referencing standard fonts found on the user’s computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the @font-face rule and provide the font name and source location. You can host these on your server or from a font provider.
### Animation
Using CSS to animatie your components is an easy way to make your application feel alive and interactive. You create animations using the animation properties and defining keyframes for what the element should look like at different times in the animation.
### Debugging CSS
CSS is extremely powerful, but sometimes it can be very frustrating to figure out why your page is not rendering the way that you expect. You can use debuggers to inspect this. In Google Chrome, you can select the HTML page element you want to debug and selecting the inspect option. It will visually show the different elements such as padding, borders and margins, as well as CSS properties applied to teh currently selected element. You can change and add new properties directly in the debugger. This allows you to see what each property is contributing and change them to see how that impacts the rendering. 

## January 27
### Responsive Design
Web applications are expected to run well on a large variety of computing devices, which requires reconfiguration through ‘responsive design’. Much of HTML and CSS is already fluid, but the following features can completely change the layout of the application based on the device’s size and orientation.
#### Display
These are common options for the display option, which affects how an HTML element is displayed by the browser:

| Value | Meaning |
|-------|---------|
|none|Don't display this element. The element still exists, but the browser will not render it.|
|block|Display this element with a width that fills its parent element. A p or div element has block display by default.|
|inline|Display this element with a width that is only as big as its content. A b or span element has inline display by default.|
|flex|Display this element's children in a flexible orientation.|
|grid|Display this element's children in a grid orientation.|

#### Viewport meta tag
To solve the problem of mobile phones, mobile browsers started to automatically scale things. Since this can get in the way of application responses, the viewport meta tag in the head element of HTML pages was made to tell the browser not to scale the page.
#### Float
The float CSS property moves an element to the left or right of its container element.
#### Media Queries
One of the main CSS features for creating responsive applications is the ‘@media’ selector. It dynamically detects the size and orientation of the device and appliances CSS rules to represent the structure of the HTML in a way that accommodates the change. This can be used, for example, to tell which side of the viewport is the longest, and then move things around to make the most useful things appear.
### Grid
The grid display layout helps display a group of child elements in a responsive grid. Start with a container element that has a bunch of child elements, and then use the CSS display property with the value of grid on the container element, which will tell the browser that all of the children of this element are to be displayed in a grid flow. The grid-template-columns property specifies the layout of the grid columns, and could be set to repeatedly define each column to auto-fill the parent element’s width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (1fr) of the parent’s total width. The grid-auto-rows property could be used to specify the height of the rows, and then the grid-gap property can specify how large of a gap should be between grid items. 
### Flex
The flex display is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. One can set the flex-direction property with a value of ‘row’ or ‘column’ to indicate which way things are oriented, and then indicate how much it can grow and the starting height as such: ‘flex: [growth] [base height]’, where ‘growth’ can also represent the amount of space that is being given to an object.
#### Media Query
To include cases of small screen sizes, media queries can be combined with flex to drop sections or reorient sections based on narrowness of screen. The flex-direction property can be used with the ‘@media’ query to changed based on the size of the screen. One could use the same to make elements disappear (using ‘display: none;’) when a max height is reached.


#### Asssignment
[CodePen](https://codepen.io/Sdsquires27/pen/jErYEad)

### CSS Frameworks
CSs frameworks provide functions and components that commonly appear in web applications. As web developers built more and more web applications, they started using the same patterns, and then combined these patterns into a shared package of code and contributed it to the world. This made it easier to develop and made the user experience simpler.
#### Tailwind
A new rising contender in the CSS framework space is Tailwind CSS and Tailwind UI. Instead of using large, rich, CSS rulsets to compartmentalize styling and functionality, it uses smaller definitions that are applied to individual HTML elements, moving much of the CSS representation out of the CSS file and directly into the HTML. We will learn more about this shortly.

#### Bootstrap
Bootstrap is the reigning champion of CSS frameworks. Tons of people use it, which can make it hard to grab the attention of new users. Integrating bootstrap requires referencing the Bootstrap CSS files from their CDN (content delivery network) to then add the HTML link elements to your head. If you want to use things that require JavaScript, this can be called at the end of the HTML body element. Later, you can use the Node Package Maanger to download Bootstrap and include it in your source code in order that you might not rely on someone else’s server to provide this important part of your application.  Once this is linked, you can start using its components.
#### Assignment
[CodePen](https://codepen.io/Sdsquires27/pen/QwEawYR)

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
