// A function is a serie of statements that are group together into a special packege in JS.

//defined with the keyword 'function'
// Functions have to be declared
// Function name optional
// Function parameters
// whitin the curly braces we have the body



function plus(a, b){
    let sum = a+b;
    return sum;     // the return statement
}
plus(2, 2);         // Invoking the function

//_____________________________________________________

//Two ways of Declaring Functions

 // 1) Traditional Declaration

function plus(a, b){
    let sum = a+b;
    return sum;
}
plus(2, 2);

// Definition Expression

let plus = function(a, b){
    return console.log(a + b)
};
plus (2, 2);

// Assigning functions to expressions
// Anonymous functions
// names can be useful
// more flexible than expressions
// can invoke the function immediately


//FUNCTION INVOCATION
function plus(a, b){
    return(
        console.log(a+b),
        console.log(this),
        console.log(arguments)
    )
}
plus(2, 2)

//using function as objects

let calc = {
    status: 'Awsome',
    plus: function(a, b){
        return(
            console.log(this),
            console.log(a+b),
            console.log(arguments),
            console.log(this.status)
        )
    }
}
calc.plus(2,2);

/* The this argument points to the object
    Invoke the function using dot notation
    The biding of 'this' happens at invocation time

    ** Binding Function to objects and using them as methods
it's a very good programming technich, it's more flexible and useful than a lot of other methods.*/

// Functions can also construct objects
//Using the 'new' keyword

let Dog = function(){
    let name, breed;
    return console.log(this);
}
firstDog = new Dog;
firstDog.name = 'Roover';
firstDog.breed = 'Doberman';

console.log(firstDog.name);
// Result = Roover
console.dir(firstDog)
// The constructor creates an object that is based on the original function.

secondDog = new Dog;
secondDog.name = 'Fluffy';
secondDog.breed = 'Poodle'
//this argument point to the instace of the object
// Convention says that Constructor names should be capitalized
// Good way of letting know that this function creates
//_______________________________________________________

/*Expanding objects through prototype
    - Prototypal Inheritance
    - Every object can be based on another
    - prototype object gives you access */
let speak = function(saywhat){
    console.log(saywhat)
}

let Dog = function(){
    let name, breed;
}

let Cat = function(){
    let name, breed;
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = 'Rover';
firstDog.breed = 'Doberman'
firstDog.speak('WOOF')

firstCat = new Cat;
firstCat.name = 'Garfield';
firstCat.breed = 'Manx'
firstCat.speak('Meow')

/* -Multiples objects can Inheritance
   -All objects inherit properties
   -Declaretions inherit from Function
   -Function constructor inherits from object
   /*_________________________________________________________
   Invoking Functions through Call & Apply
   -That's interesting!!! Check it out below!!

   This technich is sometimes knows as  *Indirect invocation this because
   allows you to execute a function in a different way and that gives you a little better
   control over the 'this' argument. You can also define value of the 'this' argument.
   But remember that the 'this' paramater is bound to the global object, that means that
   can easily get control by another function or method.*/

   let speak = function(what){
       console.log(what);
       console.log(this);       //window object (not useful)
   }
   speak('moof');
/* Call passes a value and Apply an Array*/

let speak = function(what){
       //console.log(what);
       console.log(this.love);
       //console.log(this.normal);

   }
   let saySomething = {normal: 'meow', love: "purr"}
   speak.call(saySomething);        // here I;m taking the variable and passing through the speak method as 'this' paramater.
   //speak('moof');
   /*Refreshing in the brownser it should be able to see 'purr'
   -We were able to passa the variable saySomething inside the function using 'this' paramater.
   uncommenting the second dot log we should get also 'meow'.