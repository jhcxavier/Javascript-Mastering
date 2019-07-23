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