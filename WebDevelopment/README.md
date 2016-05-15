Workshop in Web Development
========================

The slides from the lecture can [be found here](https://docs.google.com/presentation/d/1PM-7qhfzFqAbp3-8LsRAnMdlRrJnYhiOqiRN3eQS7sA/edit?usp=sharing)

## What is this?
This is a workshop on how to get started in web development.
It’s on a beginners level, you need absolutely no knowledge in programming or web development. If you already know HTML and JavaScript, this is either a nice refreshment of that, or not for you =)
We will learn HTML, CSS and some tiny bit JavaScript, and what the possibilities are, and where to go next

## What will we accomplish?
We will together create a small web page using all the common techniques that’s used online
What you need is a web browser (Chrome, Firefox, Internet Explorer) and a text editor (Sublime Text 3, Notepad++, notepad, textEdit)

## What is web development?
What is needed for a web site to show up, look pretty, and do things?

 * HTML delivers the content, how you know what text, headlines, images and so on shows up
 * CSS makes it look a certain way, backgrounds, sizes
 * JavaScript, how you create a site that interacts with the users. What happens when you click a button, timers, popups, calculations

## HTML - what is it?
Hypertext Markup Language

* HTML is the first thing that came to the internet
* The browser reads the HTML and interprets it and shows it to you
* A way to describe content - what is what
* The building blocks are called “tags”
* Different tags are used to different content
* Reference: https://developer.mozilla.org/en-US/docs/Web/HTML

## HTML - create basic page

Create a simple web page (found in folder 1)

* Open your text editor of choice 
* Create a file called html-1.html and save it to your computer

## Create a simple web page (found in folder 1)

* Open your text editor of choice 
* Create a file called html-1.html and save it to your computer

In it, write:

    <html>
        <head>
            <title>Web Development</title>
        </head>
        <body>
            The first web page I created
        </body>
    </html>

* Save the file
* Open a web browser and open your file

## HTML - attributes

Each HTML element can have multiple attributes that adds functionality.
Common example is the link tag

    <a href=”google.com”>Link to Goolge</a>

Another is the class and id attribute

    <button class=”pink-button” id=”send-user-name”>Send</button>

## HTML - tags

Create a page with more tags (found in folder 1)

* Create a new file in your editor, save it
* Create one of each of these tags
  * Headlines
  * Paragraphs
  * Images
  * Links
  * List
  * Input element
  * Title
  * Button

Refrence for this can be found on [MDN HTML reference page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference), or in folder 1, file html-2

## HTML - let’s look at a deployed page

All pages online use these HTML elements, facebook, twitter, youtube, and you can see for yourself what elements they are using. Great for learning and mimicking! 

* Open a browser
* Right click on the page
* Click “inspect element”
* A panel will show up where you under “inspector” can see all elements on the page

# CSS

*Cascading Style Sheets*

A way to make it look nice. CSS was invented to style the content of the HTML tags. There is a way the browser styles tags, CSS can override that.

* A way to describe the look of the content
  * Colors, fonts, positioning, sizes
* Uses HTML tag names, classes, id:s and inline to specify what HTML element should get the styling
* Style rules gets applied to HTML

## CSS - your first CSS styling

Creating a HTML document with a connected CSS document (found in folder 2, called CSS-1)

* Create an HTML document and save it like before
* Inside the <head> tag, link a CSS document


    `<link rel="stylesheet" type="text/css" href="css-1.css">`


* Create a CSS document called css-1.css
* Style the background of the page by writing:


    `body { background-color: pink }`

## CSS - cascading?

The cascading part of Cascading Style Sheets means that rules can be overwritten, in two ways:

1. A rule read by the browser later will overrule an earlier rule. 
  * `body {color: blue}` at line 1 will be overwritten by `body {color: red}` on line 4 in a document
  * Examples of this in folder 2, CSS-2.html
2. Selector specificity

```
    body {
      background: blue;
    }

    body {
      background: red;
    }
```

Which will win?

## CSS - Selectors

CSS has a few ways to target different HTML elements, and they have different “weight”. Examples in folder 2, css-3

* Element selector
* Class selectors
* ID selectors
* Inline styling

* The extra important one (the special one)

## CSS - Element selector

* Targets the name of an HTML element
* For example:

```
    p, h1, img, button, section, div

    p {
        margin-left: 20px;
    }
```

* Not very strong and influential, will lose to all the others

## CSS - Class selector

* Targets the class or attribute
* For example:

```
    .my-button {
        padding: 20px
    }
```

* Has some influence and some saying
* Will always win over element selector

## CSS - ID selector

* Targets the id of an element
* Only one element of a page should have a certain ID
* For example:

```
    #login-button {
        border-color: #000;
    }
```

* Will always win over the two previous

## CSS - Inline styling

* Written in the HTML
* Should not be spoken of or used 
* Example:

```
    <h1 style=”color: green”>Hello</h1>
```

## CSS - The special selector that wins all

* Always win, but ruins the game for all
* Destroys the cascading
* Don’t use unless nothing else works
* !important
* Example:

```
    p .another-color {
        color: red !important;
    }
```

## CSS - Inheritance

The real strength of CSS, rules can be inherited (example in folder 2, CSS-4)

A style given by one rule will hit all specified elements, and only the style that’s specifically overwritten will be changed

So styles can be inherited

## CSS - Combining rules

Rules can be combined, usually because you want to be more specific.

```
    p { 
        margin-top: 30px; margin-left: 40px;
    }
```

Will “hit” all paragraph tags and change the margin of those

```
    div p {
        margin-top: 70px;
    }
```

Will hit all paragraphs inside that have a div as an ancestor
```
    p.no-top-margin {
        margin: 0px;
    }
```

Will hit all paragraphs with the class “no-top-margin”

There are a few ways to combine rules, but the most common ways are:

* Descendant
```
    div p .pink-button
```

Any element with the class `pink-button that somewhere has an ancestor that’s a `p`, which in turn has an ancestor that’s a `div`.

* “Combination”
```
    img.tiny-image
```

Any element that is an image and also has the class `tiny-image`
It’s the space between the rules that makes the difference




