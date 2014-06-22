Cascading style sheet
=====================

A set of defined ways to style HTML. Style sheets are a way to seperate the content from the styling of the content. 

The styling **cascades**, meaning that style rules can come from multiple places and the "strongest" one wins and sets the final look. Strongest here can mean:

* Being read the last by the browser (in what order the style sheets are loaded, or where in the document the rule is written)
* Having the highest specificity (What kind of style sheet you are using, or what kind of rule you are using)

There are 3 ways to write your CSS, and they are ordered here by the strongest first.

1. **Inline style**. This means writing the styling directly in the HTML element. This will always win over the following two ways, but is strongly discouraged, since it is very hard to maintain 
2. **Internal stylesheet**. 
3. **External stylesheet**. 