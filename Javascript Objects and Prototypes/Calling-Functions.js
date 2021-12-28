//Calling Functions

//01-Executin function
//Context - window (this)
function foo(){
    console.log("Hello");
}

foo();

//02-Executing function as method of object
//Context - object (this)
var obj = {};

obj.foo= function(){
    console.log("Hello");
}

obj.foo();

//03-Executing a function as a constructor
//Context - newly created object (this)
new foo();

//04- Call method
function Bicycle(tirePressure){
    this.tirePressure=tirePressure;
    this.inflate = function(){
        this.tirePressure +=3;
    }
}
function Mechanic(name){
    this.name=name;
}

var bike = new Bicycle(30);
var mike = new Mechanic('mike');

//bind bike
mike.inflateTires.call(bike);

//RECOMMENDED BY IDE
class Mechanic {
    constructor(name) {
        this.name = name;
    }
}



//Every function has properties,
//like Call, which can bind
//objects as references for context
foo.call();
foo();