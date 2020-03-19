class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}
class carFactory{
    createCar(type){
        switch(type){
            case "honda":
                return new Car(4, "V6", "grey")
            case "toyota":
                return new Car(2, "V4", "red")
        }
    }
}
const factory = new carFactory();
const honda = factory.createCar('honda');


console.log(honda);
