CSS selector reference
======================

The following are the different type of HTML-elements possible to select with CSS

Everything-selector
------------------
Selects everything

    *

Element selector
--------------
Selects all elements of a certain type, for example:
    
    p
    div
    h1
    input
    html
    ul
    li

Pseudo-elements
---------------
Pseudo elements are elements in the HTML, certain parts of the document

    ::after
    ::before
    ::first-line
    ::selection

Attribute selector
------------------
Select an element based on an attribute of the HTML element. Here you can select a specific type of input element, a checkbox if it is checked, for example. Here you can also pattern matching to for example select all elements where the ```src``` starts with ```https```

    [type="button"]
    [src^="https"]

As HTML:

    <input type="button">
    <img src="https://google.se/an-image.jpg">

Class selector
--------------
Selects all elements with a specific class

    .red-and-bold {
       color: red;
       font-weight: bold;
    }

As HTML:

    <p class="red-and-bold"></p>

Pseudo class
------------
Pseudo classes select elements in a certain state, such as a link when it's hovered over.

    :link
    :hover
    :focus
    :first-child
    :nth-child
    :nth-of-type
    :target
    :checked
    :enabled
    :disabled

ID-selector
----------
Selects the element with a specific ID

    #navigation-area {
        background-color: gray;
    }

As HTML:

    <div id="navigation-area"></div>


Combining selectors to specify even more
========================================

All the different type of selectors can be compined to make sure you get the look you want

Decendant selector
-----------------
**element element**  

By writing two selectors after each other, it is a decsendant selector. It means that the selector to the right is a descendant to the left. It is a descending HTML element.

    div .pink-text {
    	color: pink;
    }

As HTML:

    <div>
    	<p class="pink-text">This text will be pink</p>
    	<p class="red-text">This will not</p>
    </div>

Child selector
--------------
**element > element** 

Selects all elements that direct descendant to an element, ergo a child. In other words, it only looks one level down the markup structure, no deeper. So if there was another unordered list nested deeper, the list item children of it will not be targeted by this selector.

    .navigation > h1 {
    	margin: 40px;
    }

As HTML

    <div class="nevigation">
    	<h1>Item level 1>
    	<div>
    		<h1>Item level 2</h1>
    	</div>
    </div>


Sibling selector
----------------
**element ~ element**

Selects all elements that are placed after another elements, at the same level

    .all-inputs ~ input {
    	font-size: 24px;
    }

As HTML

    <h1 class="all-inputs">
    <input type="text">
    <input type="button">

