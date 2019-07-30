
// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
// Notes:* The legal drinking age in the United States is 21.
// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true

function isOldEnoughToDrink(age) {

  if (age < 21){
    return false
  }else {
    return true;
  }

}
console.log(isOldEnoughToDrink(22))
//------------------------------------------------------------------------------

//  Write a function called "isOldEnoughToDrive".

// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Notes:* The legal driving age in the United States is 16.

// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true

function isOldEnoughToDrive(age) {

  if(age < 16){
    return false
  }else {
    return true;
  }
}
console.log(isOldEnoughToDrive(22))
// //------------------------------------------------------------------------------
//  Write a function called "isOldEnoughToVote".

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Notes:* The legal voting age in the United States is 18.

// var output = isOldEnoughToVote(22);
// console.log(output); // --> true
function isOldEnoughToVote(age) {

  if(age < 18){
    return false
  }else{
    return true
  }
}
console.log(isOldEnoughToVote(22))
//------------------------------------------------------------------------------

//  Write a function called "checkAge".

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

function checkAge(name, age) {

  switch(true){
    case age < 21:
      return "Go home, "+name+"!"

    case age >= 21:
      return "Welcome, "+name+"!"
  }
}
console.log(checkAge('Adrian', '22'))

//------------------------------------------------------------
// Write a function called "getFullName".

// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

// var output = getFullName('Joe', 'Smith');
// console.log(output); // --> 'Joe Smith'

function getFullName(firstName, lastName) {

  return firstName +' '+ lastName;
}
console.log(getFullName('Joe', 'Smith'))
//===========================================================
// Write a function called "getLengthOfWord".

// Given a word, "getLengthOfWord" returns the length of the given word.

// var output = getLengthOfWord('some');
// console.log(output); // --> 4

function getLengthOfWord(word) {

  return word.length;
}
console.log(getLengthOfWord('some'))


//==========================================================
//  Write a function called "getLengthOfTwoWords".

// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9

function getLengthOfTwoWords(word1, word2) {

  return word1.length + word2.length;
}
console.log(getLengthOfTwoWords('some', 'words'))

//===============================================================
// Write a function called "isGreaterThanTen".

// Given a number, "isGreaterThanTen" returns whether it is greater than 10.

// var output = isGreaterThanTen(11);
// console.log(output); // --> true
function isGreaterThanTen(num) {

  if(num > 10){
    return true;
  }else {
    return false;
  }
}
console.log(isGreaterThanTen(11))
//=========================================================
//  Write a function called "isLessThan30".

// Given a number, "isLessThan30" returns whether the given number is less than 30.

// var output = isLessThan30(9);
// console.log(output); // --> true
function isLessThan30(num) {
  if(num < 30){
    return true;
  }else {
    return false;
  }
}console.log(isLessThan30(9))

//============================================================
//  Write a function called "equalsTen".

// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false

function equalsTen(num) {
  if(num == 10){
    return true;
  }else {
    return false;
  }

}
console.log(equalsTen(9))
//==============================================================
//  Write a function called "isLessThan".

// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

// var output = isLessThan(9, 4);
// console.log(output); // --> true
function isLessThan(num1, num2) {
  if (num2 < num1){
    return true;
  }else {
    return false;
  }
}
console.log(isLessThan(9,4))


