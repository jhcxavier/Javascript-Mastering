let instance = null;

class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
     
    }
}
class Suv extends Car{
    constructor(doors, engine, color){
        super(doors, engine, color);
        this.lights = "led";
    }
}
const civic = new Car(4, "V6", "White")
const cx5 = new Suv(4, "V8", "grey")

console.log(civic);
console.log(cx5);
