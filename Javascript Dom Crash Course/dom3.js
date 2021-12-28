//Add event listeners insted of 
//using onclick on html

document.getElementById('button').addEventListener
('click',buttonClick);

//pass event as e
function buttonClick(e){
    console.log('Button Clicked');
    // element that fired it
    e.target;
    e.target.className;
    e.target.classList;
    //event type and properties
    e.type;
    //coordinates in window from click
    e.clientY;
    //coordinates in the element from click
    e.offsetX;
}

//Events: click, mouseup, mousedown, mouseover,
//mouseout, mouseleave, mouseenter, dblclick,
//mousemove, keydown, keyup, keypress, focus, blur
//cut, paste, input(anything you do with input)
//change, submit(forms)