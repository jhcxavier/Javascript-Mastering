class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}
class CarFactory{
    createCar(type){
        switch(type){
            case "honda":
                return new Car(2, "V6", "white")
            case "toyota":
                return new Car(2, "V4", "red")
        }
    }
}

let carMixin = {
    revEngine(){
        console.log(`The ${this.engine} is doing Vroom Vroom!`);
    }
}
const carFactory = new CarFactory();


const autoManufacturer = (type, model)=>{
    switch(type){
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
}

Object.assign(Car.prototype, carMixin)

const honda = autoManufacturer('car', "honda")

honda.revEngine();
// console.log(honda);
