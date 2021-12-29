//Examine document object
console.dir(document);

console.log(document.domain);
console.log(document.title);
console.log(document.url);
console.log(document.doctype);
console.log(document.head);


//Change properties from javascript
document.title='New Title';

//Get all elements from the page
console.log(document.forms);
console.log(docuemnt.images);

//Selectors
//Get element by id
var element = document.getElementById('id');
//Get element by class (array)
var items = document.getElementsByClassName('className');
//Get elements by tag (array)
document.getElementsByTagName('tag');

//Change element in DOM
//text content-no style
element.textContent='new text';
//inner text-with style
element.innerText='new text';
//inner html
element.innerHTML='<h1>wu</h1>';
//style
element.style.borderBottom = 'solid 3px #000';

//Add style to many elements
for(var i = 0; i < items.length; i++){
    items[i].style='new style';
}

//Query Selector //
//Only grabs one (the first one)
//By Id
var header = document.querySelector('#main-header');
//tag
document.querySelector('input');
//type
document.querySelector('input[type="submit"]');
//select a specific element from class
document.querySelector('.list-group-item:nth-child(2)');

//QUERY Select all//
//gets all by tag by order (odd only)
document.querySelectorAll('li:nth-child(odd)');