//initializating an object!
const circle = {
    //properties
    radius:1,
    location:{
        x:1,
        y:1
    },
    //methods
    draw: function(){
        console.log('draw')
    }
};

circle.draw();

//Factory Function

function createCircle(radius){
    return {
        radius,
        draw:function(){
            console.log("draw")
        }
    }
}
const circle1 = new createCircle(1); //1 = radius!
console.log(circle1)

//Constructor function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1)
console.log(another)