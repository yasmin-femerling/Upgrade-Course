//Tranversing the DOM//
var itemList = document.querySelector('#items');

//get parent Node
itemList.parentNode;

//get parent element
itemList.parentElement;

//child node
//NOT RECOMMENDED - ALSO GETS TEXT BETWEEN 
//(such as spaces)
console.log(itemList.childNodes);
//Recommended - gets html collection
console.log(itemList.children);
//Includes whitespace and line breaks
//NOT RECOMMENDED
itemList.firstChild;
itemList.lastChild;
itemList.nextSibling;
itemList.previousSibling;
//Actual element, recommended
itemList.firstElementChild;
itemList.lastElementChild;
itemList.nextElementSibling;
itemList.previousElementSibling;

//Create Element
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id='id-hello';
newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello World');

//Append nodes to other nodes
newDiv.appendChild(newDivText);
newDiv.insertBefore(newDivText);
