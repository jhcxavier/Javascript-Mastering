let instance = null;

class Car {
    constructor(doors, engine, color){
        if(!instance){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
        instance = this;
        }else
            return instance;
    }
}
// class Suv extends Car{
//     constructor(doors, engine, color){
//         super(doors, engine, color);
//         this.lights = "led";
//     }
// }
const civic = new Car(4, "V6", "White")
const honda = new Car(2, "V8", "Black")
// const cx5 = new Suv(4, "V8", "grey")

console.log(honda);
console.log(civic);