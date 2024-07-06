console.log("Hello World, I am from manipulation.js file");

// Acesssing a single element
let id = document.getElementById('head');

// accesong the fist element we use querySelector

let q = document.querySelector('div p');

// accessing the properties individually

 id.style.color = 'red';

 //changing the font size

 q.style.fontSize = '40px';

 // 2.1.2. Accessing multiple elements
 // to be able to access multiple elements we can use 
 // querySelectorAll
 // getElementsByClassName
 // getElementsByTagName

 // lets say we need to access all elemts with the class of text

 let className = document.getElementsByClassName('text');
 console.log(className);
 // a node list is returned which is similar to an array
 // like we can primt the third element using:
 console.log(className[2]);

 // gettin all the elements with the tag name
    let tagName = document.getElementsByTagName('p');
    console.log(tagName);

    // getting the first child
    let Fchild = document.getElementById('division').firstChild;
    console.log(Fchild);

    // getting the last child
    let Lchild = document.getElementById('division').lastChild;
    console.log(Lchild);

    // accessing the an elemt whih is at the middle
    let middle = document.getElementById('middle');
    console.log(middle.nextSibling);

//     2.3. Get and Updating element content
// 2.3.1. Setting and getting text Content
// to change the text content of an element we ca use two properties
// either --> nodeValue 0r textContent

// using nodeValue
// let nodeValue = document.getElementById('head').firstChild.nodeValue;
let nodeValue = document.getElementById('middle').firstChild.nodeValue = "nodeValue text";
console.log(nodeValue);

// geting elemt with textContent
let textContent =document.querySelectorAll('.text')[1].textContent="This is from the manipulation from js";
console.log(textContent);
// addinh and removing HTML content
// we can add and remove html content using the innerHTML property
// when using innerHTML becaful becuase the code is usiually changed completely
// to add content we can use +=

// example 1
// if we use += the content will be added at the end of the existing content 
// if we use = the content will be replaced
document.getElementById('division').innerHTML += "<ul> <li>Angular</li><li>Vue js</li><li>React</li></ul>";

// createElement is used to create a new HTML
let newElemt = document.createElement('h1');
// element.createTextNode used to create a text node,
let text = document.createTextNode("This is a new element");
// appendChild is used to append a new element into a parent element.
newElemt.appendChild(text);
document.getElementById('division').appendChild(newElemt);

// there's also another method called removeChild