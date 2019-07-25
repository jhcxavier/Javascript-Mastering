/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);
// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);
// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/



/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

let massMark = 80 //kg
let heightMark = 1.80 //meters

let massJohn = 90, heightJohn = 1.95;

let bmiMark = massMark/heightMark^2;
let bmiJohn = massJohn/heightJohn^2;

if (bmiJohn > bmiMark){
    console.log('Bmi John is bigger than Bmi Mark')
}
else console.log('Bmi Mark is bigger than John')
//####################################################################

//if / else statements

let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + " is married");
} else {
    console.log(firstName + " will hopefully marry soon");
}

// boolean logic

let firstName = 'John';
let age = 16;

if (age<13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

// AND (&&) => true if ALL are true
// OR (||) => true if ONE is true
// NOT (!) => invert true/ false value

/*****************************
* The Ternary Operator and Switch Statements
*/

let firstName = 'John'
let age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

//It can be written like below (ternary operator)

let drink = age >= 18 ? 'beer':'juice';
console.log(drink)

// or can be written like that!!

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

//Switch Statement
let firstName = 'John'
let job = 'developer';
switch (job){
    case 'teacher':
        console.log(firstName +  'teach kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drive for Uber.');
        break;
    case 'designer':
        console.log(firstName + ' design websites.');
        break;
    default:
        console.log(firstName + ' has no job at the moment.');
}

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man');
}

/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
var height;
height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
     If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.*/

let jTeam = 89 + 120 + 103 / 3
let mTeam = 116 + 94 + 123 / 3
let maryTeam = 97 + 134 + 105 / 3
switch(true){
    case jTeam > mTeam && jTeam >maryTeam:
        console.log('John\'s team has the highest avarage of' + jTeam)
        break;
    case mTeam > jTeam && mTeam >maryTeam:
        console.log('Mike\'s team has the highest avarage of' + mTeam)
        break;
    case maryTeam > jTeam && maryTeam > mTeam:
        console.log('Mary\'s team has the highest avarage of' + maryTeam)
        break;
    default:
        console.log('draw')
        break;
}
//FUNCTIONS

function calculateAge(birthYear){
    return 2018 - birthYear;
}
calculateAge(1990);

let ageJohn = calculateAge(1990);
let ageMike   = calculateAge(1948);
let ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane)


function yearsUntilRetirement(year, firstName){
    let age = calculateAge(year)
    let retirement = 65 - age;
    if(retirement > 0){
    console.log(firstName + ' retires in '+ retirement+' years');
    }else{
        console.log(firstName+" is already retired.")
    }
}
yearsUntilRetirement(1990, 'John')
yearsUntilRetirement(1948, 'Mike')
yearsUntilRetirement(1969, 'Jane')

/*****************************
* Function Statements and Expressions
*/

// Function declaration
//function whatDoYouDo(job, firstName){}

let whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Miami';
        case 'designer':
            return firstName + ' design beatuful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('driver', 'John'))
console.log(whatDoYouDo('designer', 'Maria'))
console.log(whatDoYouDo('teacher', 'Mike'))
console.log(whatDoYouDo('policeman', 'John'))

/*****************************
* Arrays
*/

// Initialize new array

let names =['John', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1948);

console.log(names.length);

//Mutate array data

names[1] = 'Ben'
names[names.length] = 'Mary'
console.log(names)

// Different data types

let john = ['John', "Smith", 1990, 'teacher', false];

john.push('blue'); // add an element to the end of the array
john.unshift('Mr.') // add an element at the beginin of the array
john.pop()  //remove an element from the end of the array!
john.shift() //remove an element from the begining of the array
console.log(john.indexOf(1990)) // tells which position in the array is the element!!
console.log(john)

let isDesigner = john.indexOf('teacher') === 3 ? 'John is a teacher' : 'Is not a teacher';
console.log(isDesigner)


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

let tipCalulator = function(bill){

    if(bill < 50){
        tip = bill * 0.2
    }else if (bill < 200){
        tip = bill * 0.15
    }else {
        tip = bill *0.1
    }
    return tip + bill;
}
let bill = [124, 48, 268];
let tips = [tipCalulator(bill[0]),tipCalulator(bill[1]), tipCalulator(bill[2])]

console.log(tips)







