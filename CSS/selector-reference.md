CSS selector reference
======================

/*CSS SELECTORS AND HOW TO USE THEM CLEVERLY IN LESS*/
/*ID-SELECTOR*/
/*Selects the element with id="second-paragraph"*/
/*I use the ID-selector for namespacing, meaning that I surround areas in my markup with ID:s to make sure that my selectors hits exactly the way I want them to*/
#navigation-area {
background-color: gray;
}
 
/*CLASS SELECTOR*/
/*Selects all elements with class="red-and-bold"*/
.red-and-bold{
color: red;
font-weight: bold;
}
 
/*ELEMENT SELECTOR*/
/*Selects all <h1> elements*/
h1{
text-decoration: underline;
}
/*ELEMENT, ELEMENT SELECTOR*/
/*selects all <h3> and all <h5> elements */
h3, h5{
font-family: Arial, sans-serif;
}
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