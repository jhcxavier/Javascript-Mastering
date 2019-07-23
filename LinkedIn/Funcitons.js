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
// Good way of letting know that this function creates objects