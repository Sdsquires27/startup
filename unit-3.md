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
