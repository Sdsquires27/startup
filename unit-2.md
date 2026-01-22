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