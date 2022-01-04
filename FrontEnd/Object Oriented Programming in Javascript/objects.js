//Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//Constructor Function
function Circle(radius){
    this.radius = radius;
    let defaultLocation = {x:0,y:0};

    let computeOptimumLocation = function(factor){
        //...
    }

    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', 
        {
            get:function(){
                return defaultLocation;
            },
            set:function(value){
                if(!value.x || !value.y)
                    throw new Error('Invalid');
                    
                defaultLocation = value;
            }
        });
}

const another = new Circle(1);

//suggested by IDE
//Constructor Function
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('draw');
        };
    }
}
