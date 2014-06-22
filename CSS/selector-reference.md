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

Class selector
--------------
Selects all elements with a specific class

    .red-and-bold {
       color: red;
       font-weight: bold;
    }

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




Combining selectors to specify even more
========================================


/*ELEMENT ELEMENT SELECTOR, DECENDANT SELECTOR */
/*Selects all <li> elements inside <ul> elements*/
ul li{
background-color: #936284;
}
/*ELEMENT>ELEMENT SELECTOR, CHILD SELECTOR*/
/*Selects all <li> elements where the parent is a <ul> element*/
ul>li{
font-style: italic;
}
/*The first selector above is a decendant selector. It will select any list items that are anywhere underneath an
unordered list in the markup structure. The list item could be buried three levels deep within other nested lists,
and this selector will still match it. The second selector above is a child combinator selector.
This means it will only select list items that are direct children of an unordered list.
In otherwords, it only looks one level down the markup structure, no deeper. So if there was another
unordered list nested deeper, the list item children of it will not be targeted by this selector.*/
/*ELEMENT+ELEMENT SELECTOR, SIBLING*/
/*Selects all <p> elements that are placed immediately after <div> elements*/
div+p{
background-image: url(http://i.imgur.com/NWmsdcF.jpg);
color: white;
}
/*ATTRIBUTE SELECTOR*/
/*Selects all elements with a name attribute*/
[name]{
border: 4px solid purple;
}
/*ATTRIBUTE VALUE SELECTOR*/
/*Selects all elements with name="ponies"*/
[name="ponies"]{
border-bottom: 4px dotted gray;
}
/*HOVER SEELCTOR*/
/*selects links on mouseover*/
a:hover{
font-size: 3em;
}
/*FIRST-OF-TYPE SELECTOR*/
/*Selects every <p> element that is the first <p> element of its parent*/
p:first-of-type{
font-size: 2em;
}
/*NTH-OF-CHILD SELECTOR
/*Selects every <li> element that is the second child of its parent*/
li:nth-child(3){
text-decoration: underline;
}
/*ELEMENT WITH CLASS SELECTOR*/
/*selects all tables with class "some-table"*/
table.some-table{
margin: 50px 0 80px 300px;
border: 2px solid black;
}
table.some-table td{
border: 1px solid silver;
}
table.some-table td:hover:first-of-type{
background-color: red;
}