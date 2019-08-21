/* In very simple terms a JavaScript Engine it's a program that executes javascript code.

The First thing that happens inseide the engine is that the code is parse by a Parser. Which basic
reads the code, line by line and check if the syntax of the code that we gave is correct. That means that
the parser knows JS rules and how need to be written in order to be correct and valid. If there's some mistake
probably it will thrown a error and stops the execution.
If the code is correct then the parser produces a data structure knowing by Abstract Syntax Tree which is then
translated into Machine Code, so this code is no longer JS code but becomes a set of instructions that can be executed
directly by a computer processor. */

// Lecture: Hoisting

//functions
calculateAge(1965);

function calculateAge(year){
    console.log(2016-year);
}
//console.log(1990)


//retirement(1956);
let retirement = function(year){
    console.log(65-(2016 - year));
}
//retirement(1990);
//Hoisting just works for functions declarations!!!
//Variables

console.log(age) //undefined
let age = 23
console.log(age);

function foo(){
    let age = 65;
    console.log(age);
}
foo();
console.log(age);


/////////////////////////////////////
// Lecture: Scoping

//Scoping and the Scope Chain

// Each new function creates a scope: the space/ environment, in which the Variables
// it defines are accessible.

//Lexical scoping: a function that is lexically within another function get access to the sope of the outer function.


// First scoping example

var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}

//-------------------------------------------------

/////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();
