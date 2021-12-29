//Create an object//

//Inline
var myObj= {};
//add properties
myObj.firstName = "Yasmin";
myObj.gender = "F";

//Function
function createEmployeeObject(firstname){
    var newObject = {};
    newObject.firstName = firstname;
    return newObject;
}
//use constructor
var emp = createEmployeeObject("yasmin");

//Shortcut for constructor function
//Function
//Try to write it in capital letter as
//a convention, to give a hint that
//it is a constructor
function EmployeeObject(firstname){
    this.firstName = firstname;
}
//Use new keyword
var emp = new employeeObjectConstructor("yasmin");

