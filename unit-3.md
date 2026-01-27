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
