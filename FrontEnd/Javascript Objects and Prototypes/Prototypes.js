//Prototypes - bluprints, affect the behaviour of objects
//synonymous to classes

//Helps to keep functions outside the object itself
//if you put it in the constructor, functions will be created with each function

//Constructor functions can exclude the functions from the objects themselves
function foo(){};

foo.prototype.test="This is the prototype of the object foo";

//Access it from the prototype if it doesnt exist in the object
foo.test;

//Central place for methods of different objects
//Create prototype that can be accessed by various objects
function Employee(name){this.name=name};

var emp1 = new Employee("yasmin");
var emp2 = new Employee("Alex");
Employee.prototype.payPayroll = function(){console.log("function called")};
emp1.payPayroll();
emp2.payPayroll();

//direct to prototype
var proto = foo.prototype;
//prototype has a function that directs to the constructor
proto.constructor;
var b = new proto.constructor();

//_proto_ directs to the prototype
