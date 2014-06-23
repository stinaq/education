Cascading style sheet
=====================

You often hear that CSS is easy, and it is, but not really. It has a low threshold and is easy to start, but don't scoff and think it is not programming or don't require extra thinking. The problem is usually that it is tempting to do quick fixes, all the time, and in the end you have an unmanagable, unreadable and ineffective stylesheet. So, take care to learn the rules and avoid quickfixes!

So, what is it?
---------------
CSS is a declarative language. You write what you want happen, not how it should happen. By selecting an element from the HTML you can specify how the should look and behave.

Cascading?
---------
A set of defined ways to style HTML. Style sheets are a way to seperate the content from the styling of the content. 

The styling **cascades**, meaning that style rules can come from multiple places and the "strongest" one wins and sets the final look. Strongest here can mean:

* Being read the last by the browser (in what order the style sheets are loaded, or where in the document the rule is written)
* Having the highest specificity (What kind of style sheet you are using, or what kind of rule you are using)

There are 3 ways to write your CSS, and they are ordered here by the strongest first.

1. **Inline style**. This means writing the styling directly in the HTML element. This will always win over the following two ways, but is strongly discouraged, since it is very hard to maintain 

    <body>
        <h1 style="text-align:center;">Center-aligned heading</h1>
    </body>

2. **Internal stylesheet**. In the ```<head>``` tag of your HTML document you can have a ```<style>``` tag where CSS can be written. Still rather unpractical to maintain in the long run, but can sometimes be used if you want to style only a specific page

    <head>
        <style>
            body {background-color:yellow;}
            p {color:blue;}
        </style>
    </head>

3. **External stylesheet**. The most common way to write CSS. An external document is specified in the ```<head>``` tag and the styling therein will be applied to all documents where the external document is specified. Will loose to all the other 3 in the specificity war.

    <head>
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head> 