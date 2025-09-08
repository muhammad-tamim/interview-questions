<h1 align="center">Interview Questions</h1>

### 0.0.1. Table of contents
- [1. Interpersonal](#1-interpersonal)
- [2. HTML](#2-html)
  - [2.1.  What is HTML?](#21--what-is-html)
  - [2.2. Difference between element, attribute and tag?](#22-difference-between-element-attribute-and-tag)
  - [2.3. What is a marquee in HTML?](#23-what-is-a-marquee-in-html)
  - [2.4. How do you separate a section of text in HTML?](#24-how-do-you-separate-a-section-of-text-in-html)
  - [2.5. Define the list types in HTML.](#25-define-the-list-types-in-html)
  - [2.6. What is the difference between HTML and CSS?](#26-what-is-the-difference-between-html-and-css)
  - [2.7. What are void/empty elements in HTML?](#27-what-are-voidempty-elements-in-html)
  - [2.8. What are HTML Entities?](#28-what-are-html-entities)
  - [2.9. How do you display a table in an HTML webpage?](#29-how-do-you-display-a-table-in-an-html-webpage)
  - [2.10. Define an image map.](#210-define-an-image-map)
  - [2.11. Why do we use a separated style sheet in HTML?](#211-why-do-we-use-a-separated-style-sheet-in-html)
  - [2.12. What is semantic HTML?](#212-what-is-semantic-html)
  - [2.13. What is SVG in HTML?](#213-what-is-svg-in-html)
  - [2.14. What is the difference between the ‘id' and ‘class' attributes of HTML elements?](#214-what-is-the-difference-between-the-id-and-class-attributes-of-html-elements)
  - [2.15. What is the difference between HTML and HTML5?](#215-what-is-the-difference-between-html-and-html5)
  - [2.16. What is the difference between an absolute and relative URL?](#216-what-is-the-difference-between-an-absolute-and-relative-url)
  - [2.17. What are the different types of form input fields in HTML?](#217-what-are-the-different-types-of-form-input-fields-in-html)
  - [2.18. What is the difference between “display: none” and “visibility: hidden”](#218-what-is-the-difference-between-display-none-and-visibility-hidden)
  - [2.19. What is the difference between link tag `<link>` and anchor tag `<a>`?](#219-what-is-the-difference-between-link-tag-link-and-anchor-tag-a)
  - [2.20. When to use scripts in the head and when to use scripts in the body?](#220-when-to-use-scripts-in-the-head-and-when-to-use-scripts-in-the-body)
  - [2.21. When to use scripts in the head and when to use scripts in the body?](#221-when-to-use-scripts-in-the-head-and-when-to-use-scripts-in-the-body)
  - [2.22. What are inline and block elements in HTML5?](#222-what-are-inline-and-block-elements-in-html5)
  - [2.23. What is the difference between `<figure>` tag and `<img>` tag?](#223-what-is-the-difference-between-figure-tag-and-img-tag)
  - [2.24. What is the difference between SVG and Canvas HTML5 elements?](#224-what-is-the-difference-between-svg-and-canvas-html5-elements)
  - [2.25. How can we include audio or video in a webpage?](#225-how-can-we-include-audio-or-video-in-a-webpage)
  - [2.26. What are Web Workers?](#226-what-are-web-workers)
  - [2.27. What are the different approaches to making an image responsive?](#227-what-are-the-different-approaches-to-making-an-image-responsive)
  - [2.28. What is the Geolocation API in HTML5?](#228-what-is-the-geolocation-api-in-html5)
  - [2.29. what is action and method attribute in form](#229-what-is-action-and-method-attribute-in-form)
  - [2.30. What is the purpose of the `<meta>` tag?](#230-what-is-the-purpose-of-the-meta-tag)
  - [2.31. How do you create an email link in HTML?](#231-how-do-you-create-an-email-link-in-html)
  - [2.32. How do you create a checkbox in HTML?](#232-how-do-you-create-a-checkbox-in-html)
  - [2.33. How do you create a dropdown list in HTML?](#233-how-do-you-create-a-dropdown-list-in-html)
  - [2.34. How do you create a multi-line text input in an HTML form?](#234-how-do-you-create-a-multi-line-text-input-in-an-html-form)
  - [2.35. How do you create a hidden input field in an HTML form?](#235-how-do-you-create-a-hidden-input-field-in-an-html-form)
  - [2.36. What is the purpose of the `<address>` tag in HTML?](#236-what-is-the-purpose-of-the-address-tag-in-html)
  - [2.37. What is the purpose of the `<canvas>` element in HTML5?](#237-what-is-the-purpose-of-the-canvas-element-in-html5)
  - [2.38. How can you include SVG graphics directly in an HTML document?](#238-how-can-you-include-svg-graphics-directly-in-an-html-document)
  - [2.39. What are data attributes in HTML, and how are they used?](#239-what-are-data-attributes-in-html-and-how-are-they-used)
  - [2.40. What is the purpose of the rel attribute in a  tag?](#240-what-is-the-purpose-of-the-rel-attribute-in-a--tag)
- [3. CSS](#3-css)
- [4. JavaScript](#4-javascript)
- [5. React.js](#5-reactjs)
- [6. Node.js](#6-nodejs)
- [7. Express.js](#7-expressjs)
- [8. MongoDB](#8-mongodb)
- [9. TypeScript](#9-typescript)
- [10. Next.js](#10-nextjs)

# 1. Interpersonal





# 2. HTML

## 2.1.  What is HTML? 

HTML is the standard markup language for creating web pages. Its element tells the browser how to display the content.  

HTML stands for = Hyper Text Markup Language  

Hyper Text = Hyper Text is text with clickable links that take you one page to other pages or different parts of the same page.  

Markup Language = Markup Language is a way to write text using special tags and rules that tell a browser how to organize and display the content.
So Instead of focusing on the behavior or logic like programming languages do, markup languages describe how content should be displayed or formatted.
example: 
- HTML: Used to create web pages.
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```
- XHTML: Similar to HTML but stricter with rules (all tags must be closed, lowercase).
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>My XHTML Page</title>
  </head>
  <body>
    <h1>Welcome to My XHTML Website</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```
- XML: Used for storing and transporting data.
```
<book>
  <title>Learning XML</title>
  <author>John Doe</author>
  <year>2025</year>
</book>
```
- Markdown: Used for formatting text simply, often in documentation like github readme.md files.
```
# Welcome to My Markdown Page

This is a paragraph of text.

- Item 1
- Item 2
- Item 3

**This text is bold**  
*This text is italic*
```

## 2.2. Difference between element, attribute and tag?

![diffrenceBetweenElementTagAttribute.png](assets/images/html/diffrenceBetweenElementTagAttribute.png)

## 2.3. What is a marquee in HTML?

The `<marquee>` tag in HTML creates a scrolling text or image effect within a webpage. It allows content to move horizontally or vertically across the screen.

![HTML-marquee-Tag-1.gif](./assets/images/html/HTML-marquee-Tag-1.gif)  

![HTML-marquee-Tag-2.gif](./assets/images/html/HTML-marquee-Tag-2.gif)  

![HTML-marquee-Tag-3.gif](./assets/images/html/HTML-marquee-Tag-3.gif)

## 2.4. How do you separate a section of text in HTML?

`<br>` tag – It separates the line of text. It breaks the current line and shifts the flow of the text to a new line.

## 2.5. Define the list types in HTML.

- Ordered list – displays elements in a numbered format.
- Unordered list –  displays elements in a bulleted format.
- Description list – displays elements in a name–value (term–description) format.

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```
![description-list-image](./assets/images/html/description-list-image.png)

## 2.6. What is the difference between HTML and CSS?

HTML creates a web page's structure and content, while CSS defines its and styles and layout.

## 2.7. What are void/empty elements in HTML?

Void elements (also called empty elements) are HTML tags that do not have any content or closing tag.
They are self-closing because they don’t wrap text or other elements inside. 

Common Void/Empty Elements:

```<img>, <input>, <link>, <br>, <hr>```

## 2.8. What are HTML Entities?

HTML Entities are special codes used to display characters in HTML that otherwise have a reserved meaning in HTML or are not easily typed on a keyboard.

- ```&nbsp(Non-breaking space) - (space) ```  

- ```&copy - © ```

## 2.9. How do you display a table in an HTML webpage?

- `<table>`
- `<th>`
- `<tr>`
- `<td>`
- `<tbody>`
- `<thead>`
- `<tfooter>`

## 2.10. Define an image map.

An image map is an image with clickable areas that link to different destinations.

```html
<img src="world-map.jpg" usemap="#worldmap">

<map name="worldmap">
  <!-- Rectangle area -->
  <area shape="rect" coords="34,44,270,350" href="usa.html">

  <!-- Circle area -->
  <area shape="circle" coords="337,300,44" href="japan.html">

  <!-- Polygon area -->
  <area shape="poly" coords="290,172,333,250,300,300,250,230" href="india.html">
</map>
            
```

## 2.11. Why do we use a separated style sheet in HTML?

We can link a single style sheet to various web pages, which makes it easier to maintain and change the website's look.

## 2.12. What is semantic HTML?

Semantic elements = Elements with a meaning. 

A Semantic element clearly describes its meaning to both the browser and the developer.
HTML has several semantic elements that define the different parts of a web page:
```html 
<header>, <nav>, <main>, <footer>, <section> 
```

## 2.13. What is SVG in HTML?

SVG stands for Scalable Vector Graphics.
It is an XML-based format used to display 2D graphics, shapes, and text directly in HTML.

Unlike normal images (.jpg, .png), SVG does not lose quality when zoomed or resized because it is based on mathematical vectors, not pixels.

## 2.14. What is the difference between the ‘id' and ‘class' attributes of HTML elements?

The ‘id' attribute defines a unique identifier for an HTML element, while the ‘class' attribute defines a class for a group of elements. An ‘id' can only be used once on a page, while a ‘class' can be used multiple times.

## 2.15. What is the difference between HTML and HTML5?
HTML5 is the latest version of HTML and includes new features: 
- Semantic Elements
- Built-in Multimedia Support `<audio> and <video>`
- Canvas and SVG Support
- Form Enhancements with Built-in validation without JavaScript.
    - HTML: Limited input types (text, password, checkbox, etc.).
    - email, date, url, range, number, color, etc. 
- Geolocation API
- Support local and session storage

## 2.16. What is the difference between an absolute and relative URL?
- Absolute: 
  - A link
  - Always points to the same location, no matter where it is used. 
  - `<a href="https://www.example.com/images/photo.jpg">Photo</a>`
    
- Relative
  - local storage path
  - it Depends on the location of the current page.
  - `<a href="images/photo.jpg">Photo</a>` or `./images` or `../images`

## 2.17. What are the different types of form input fields in HTML?

- text inputs: 
  - text
  - password
  - email
  - url
  - search
- Number Inputs: 
  - number
  - range
- Choice Inputs: 
  - radio 
  - checkbox
  - select
- Buttons: 
  - submit
  - button
  - reset

## 2.18. What is the difference between “display: none” and “visibility: hidden” 

Elements with “display: none” are not visible and do not take up any space on the page, while elements with “visibility: hidden” are not visible but still take up space.

## 2.19. What is the difference between link tag `<link>` and anchor tag `<a>`?

- link: Used for external resources (like CSS, icons, fonts,  or prefetch files) to the HTML document.
- `<a>`: used for clickable links that navigate to another page, section, or resource.

## 2.20. When to use scripts in the head and when to use scripts in the body?

- Use scripts in `<head>`: when the script must run before the page content loads (e.g., critical libraries), usually with defer or async.
- Use scripts at the end of `<body>`: when the script interacts with DOM elements, ensuring the HTML is fully loaded first.

## 2.21. When to use scripts in the head and when to use scripts in the body?
- Head
  - For scripts that must run before page content loads, e.g., critical libraries or configuration scripts.
- body 
  - Most common for regular scripts that interact with DOM elements. It Ensures the elements exist before JavaScript manipulates them.

**Modern Alternatives: defer and async**
- defer → Script executes after HTML is fully parsed, keeps order if multiple scripts.
```<script src="script.js" defer></script>```
- async → Script executes as soon as it loads, may run before HTML parsing is finished.
```<script src="script.js" async></script>```

## 2.22. What are inline and block elements in HTML5?

- Do not start on a new line, take only the width of their content.
```<span>, <a>, <img>, <input>```
- Block elements → Start on a new line, take full width available.
```<div>, <p>, <h1>–<h6>, <section>, <ul>, <ol>, <li>```

##  2.23. What is the difference between `<figure>` tag and `<img>` tag?
- `<img>` tag: used to embed just image
- `<figure>` tag: A semantic tag used to embed image with it's content

## 2.24. What is the difference between SVG and Canvas HTML5 elements?
- SVG is vector based and can't get  blurry when zoom. Mostly used for icons, logos, charts, diagrams.
- Canvas is pixel based and can't get  blurry when zoom. Mostly used for games, image editing, real-time graphics, animations.

##  2.25. How can we include audio or video in a webpage?
```html 
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

## 2.26. What are Web Workers?
Web Workers allow you to run JavaScript in the background, separate from the main thread, so your webpage remains responsive while performing heavy tasks.

```js
// main.js
let worker = new Worker("worker.js");
worker.postMessage("Hello Worker");
worker.onmessage = function(e) {
  console.log("Message from worker: " + e.data);
}
```
```js
// worker.js
onmessage = function(e) {
  let result = e.data + " - processed";
  postMessage(result);
}
```

## 2.27. What are the different approaches to making an image responsive?
- Using the `<picture>` element (for different screen sizes)
```html 
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(max-width: 1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Responsive Image">
</picture>
```
- Using CSS width: 100% and height: auto

## 2.28. What is the Geolocation API in HTML5?
The Geolocation API allows a webpage to get the geographical location (latitude and longitude) of the user’s device.

```html
<button onclick="getLocation()">Show My Location</button>
<p id="demo"></p>

<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =
  "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>

```

## 2.29. what is action and method attribute in form

- action → Specifies the URL or path where the form data will be sent when submitted.
```html
<form action="submit.php">
```
- method → Specifies the HTTP method used to send the form data. Two main types:
  - method → Specifies the HTTP method used to send the form data. Two main types:
  - POST → Sends data in the request body (more secure).

## 2.30. What is the purpose of the `<meta>` tag?

The `<meta>` tag provides metadata about the HTML document, such as character set, author, description, and keywords. It's placed within the `<head>` section.

## 2.31. How do you create an email link in HTML?

To create a link that opens the user's default email client with a new message, use the mailto: scheme:
```<a href="mailto:example@example.com">Send Email</a>```

## 2.32. How do you create a checkbox in HTML?

```html
<input type="checkbox" id="vehicle1" value="Bike">
<label for="vehicle1"> I have a bike</label><br>
<input type="checkbox" id="vehicle2" value="Car">
<label for="vehicle2"> I have a car</label><br>
<input type="checkbox" id="vehicle3" value="Boat">
<label for="vehicle3"> I have a boat</label><br>
```

## 2.33. How do you create a dropdown list in HTML?

```html
<label for="fruits">Choose a fruit:</label>
<select id="fruits" name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="cherry">Cherry</option>
</select>
```

## 2.34. How do you create a multi-line text input in an HTML form?
```<textarea name="message" rows="4" cols="50"></textarea>```

##  2.35. How do you create a hidden input field in an HTML form?
Use `<input type="hidden">` to create a hidden input field that stores data without displaying it to the user:
```<input type="hidden" name="userID" value="12345">```

## 2.36. What is the purpose of the `<address>` tag in HTML?
The `<address>` tag is used to define contact information for the author or owner of a document or article.

```html
<address>
  Written by John Doe.<br>
  Visit us at:<br>
  Example.com<br>
  Box 564, Disneyland<br>
  USA
</address> 
```

## 2.37. What is the purpose of the `<canvas>` element in HTML5?
The `<canvas>` element provides a drawable region in the document that can be used to render graphics, such as charts, games, or other visual images, on the fly via scripting (usually JavaScript).

```<canvas id="myCanvas" width="200" height="100"></canvas>```

```html
<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML canvas tag.</canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
</script> 

</body>
</html>
```
![canvas](./assets/images/html/canvas.png)

## 2.38. How can you include SVG graphics directly in an HTML document?

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```
![svg-circle](./assets/images/html/svg-circle.png)

## 2.39. What are data attributes in HTML, and how are they used?
Data attributes in HTML are custom attributes that start with data- and allow you to store extra information on HTML elements. They are often used to embed custom data that can be accessed via JavaScript.

```html 
<div data-user-id="12345" data-role="admin">User Info</div>
```

```js
const div = document.querySelector('div');
console.log(div.dataset.userId); // Outputs: 12345
console.log(div.dataset.role);   // Outputs: admin
```

## 2.40. What is the purpose of the rel attribute in a <link> tag?

The rel attribute specifies the relationship between the current document and the linked resource. For example, rel="stylesheet" indicates that the linked file is a CSS stylesheet.
```<link rel="stylesheet" href="styles.css">```


# 3. CSS
# 4. JavaScript
# 5. React.js
# 6. Node.js
# 7. Express.js
# 8. MongoDB
# 9. TypeScript
# 10. Next.js