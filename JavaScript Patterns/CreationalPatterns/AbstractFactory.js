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
// class Suv {
//     constructor(doors, engine, color){
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }
class SuvFactory{
    createSuv(type){
        switch(type){
            case "cx5":
                return new Car(4, "V8", "black")
            case "tucson":
                return new Car(2, "V8", "redd")
        }
    }
}
const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model)=>{
    switch(type){
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
}
const cx5 = autoManufacturer('suv', "cx5")
const honda = autoManufacturer('car', "honda")
console.log(cx5)
console.log(honda)
// console.log(honda);
