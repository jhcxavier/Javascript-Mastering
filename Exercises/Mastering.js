
// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
// Notes:* The legal drinking age in the United States is 21.
// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true

function isOldEnoughToDrink(age) {

    if (age < 21) {
        return false
    } else {
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

    if (age < 16) {
        return false
    } else {
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

    if (age < 18) {
        return false
    } else {
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

    switch (true) {
        case age < 21:
            return "Go home, " + name + "!"

        case age >= 21:
            return "Welcome, " + name + "!"
    }
}
console.log(checkAge('Adrian', '22'))

//------------------------------------------------------------
// Write a function called "getFullName".

// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

// var output = getFullName('Joe', 'Smith');
// console.log(output); // --> 'Joe Smith'

function getFullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    return fullName;
}
console.log(getFullName('Joe', 'Smith'))
//===========================================================
// Write a function called "getLengthOfWord".

// Given a word, "getLengthOfWord" returns the length of the given word.

// var output = getLengthOfWord('some');
// console.log(output); // --> 4

function getLengthOfWord(word) {
    temp =  word.length;
    return temp;
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

    if (num > 10) {
        return true;
    } else {
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
    if (num < 30) {
        return true;
    } else {
        return false;
    }
} console.log(isLessThan30(9))

//============================================================
//  Write a function called "equalsTen".

// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false

function equalsTen(num) {
    if (num == 10) {
        return true;
    } else {
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
    if (num2 < num1) {
        return true;
    } else {
        return false;
    }
}
console.log(isLessThan(9, 4))
//==================================================================
//  Write a function called "isGreaterThan".

// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

// var output = isGreaterThan(11, 10);
// console.log(output); // --> false
function isGreaterThan(num1, num2) {
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }
} console.log(isGreaterThan(9, 10))
//===================================================
//  Write a function called "isEqualTo".

// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

// var output = isEqualTo(11, 10);
// console.log(output); // --> false
function isEqualTo(num1, num2) {
    if (num1 == num2) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqualTo(11, 10))
//=====================================================
//  Write a function called "isEven".

// Given a number, "isEven" returns whether it is even.

// var output = isEven(11);
// console.log(output); // --> false
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(11))
//======================================================
//  Write a function called "isOdd".

// Given a number, "isOdd" returns whether the given number is odd.

// var output = isOdd(9);
// console.log(output); // --> true
function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(10))

//=================================================================================
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
//  Input will always be valid, i.e. no negative integers.



var countSheep = function (num) {
    let sum = "";
    for (let i = 0; i < num; i++) {
        sum = sum + (i + 1) + " sheep..."
    }
    return sum;
}
countSheep(5);

//---------------------------------------------------------------------------------------

// Write a function called "isSameLength".

// Given two words, "isSameLength" returns whether the given words have the same length.

// var output = isSameLength('words', 'super');
// console.log(output); // --> true

function isSameLength(word1, word2) {

    if (word1.length === word2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(isSameLength('words', 'super'))
//------------------------------------------------------------------------------------------
//  Write a function called "areBothOdd".

// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

// var output = areBothOdd(1, 3);
// console.log(output); // --> true

function areBothOdd(num1, num2) {

    if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(areBothOdd(1, 2))

//-------------------------------------------------------------------------------------------
// Write a function called "isEitherEven".

// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

// var output = isEitherEven(1, 4);
// console.log(output); // --> true

function isEitherEven(num1, num2) {

    if (num1 % 2 !== 0 && num2 % 2 === 0) {
        return true;

    }
    else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return false;
    }
    else {
        return true;
    }
}
console.log(isEitherEven(1, 5))
//-----------------------------------------------------------------------------------------------


//  Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true
function isOddLength(word) {

    if (word.length % 2 !== 0) {
        return true
    } else {
        return false;
    }

}
console.log(isOddLength('special'))
//_______________________________________________________________
//  Write a function called "isEvenLength".

// Given a word, "isEvenLength" returns whether the length of the word is even.

// var output = isEvenLength('wow');
// console.log(output); // --> false
function isEvenLength(word) {

    if (word.length % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEvenLength('wow'))

//___________________________________________________________________
// Write a function called "isEvenAndGreaterThanTen".

// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

// var output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false
function isEvenAndGreaterThanTen(num) {

    if (num > 10 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEvenAndGreaterThanTen(13))

//__________________________________________________________________-
//  Write a function called "average".

// Given two numbers, "average" returns their average.

// var output = average(4, 6);
// console.log(output); // --> 5
function average(num1, num2) {
    let temp = (num1 + num2) / 2 
    return temp;
}
console.log(average(5, 2))

//_______________________________________________________________
//  Write a function called "computeAreaOfATriangle".

// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

// var output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12
function computeAreaOfATriangle(base, height) {
    let temp = (base * height) / 2;
    return temp;
}
console.log(computeAreaOfATriangle(4, 6))

//_________________________________________________________________
// Write a function called "cube".

// Given a number, "cube" returns the cube of that number.

// var output = cube(3);
// console.log(output); // --> 27

function cube(num) {
    let temp = num * num * num;
    return temp;
}
console.log(cube(3))
//------------------------------------------________----------------
//  Write a function called "square".

// Given a number, "square" should return the square of the given number.

// var output = square(5);
// console.log(output); // --> 25
function square(num) {
    // your code here
    let temp = num * num;
    return temp;
}
console.log(square(5))
//_________________________________________________

// Write a function called "computeAverageLengthOfWords".

// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6
function computeAverageLengthOfWords(word1, word2) {

    return (word1.length + word2.length) / 2
}
console.log(computeAverageLengthOfWords('code', 'programs'))
_______________________________________________

//  Write a function called "addFullNameProperty".

// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.

// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith'

function addFullNameProperty(obj) {

    obj.fullName = obj.firstName + " " + obj.lastName;
}

// This next exercise I was trying to rotate an array. 
// It can be found in codelity
let arr = [1, 2, 3, 4];
// let arr = [3, 8, 9, 7, 6];

let rotate = (a, k) => {
    const min = 0;
    const max = 100;
    if (k >= min && k <= 100) {
        console.log(k)
        for (let i = 1; i <= k; i++) {
            let firstIndex = arr[0]
            //     repo.push(firstIndex)
            arr.shift()
            console.log(arr)
            arr.push(firstIndex)
            console.log(arr)
        }
    }
}
rotate(arr, 99)
//----------------------------------------------------------------------------
// Merge 2 Arrays

// You will be completing a merge sort. You will be given two arrays of
// intergers (arrays will be individually presorted). You will create a 
// function that takes in two arrays as parameters and returns an array 
// with the values from the array sorted from lowest to greatest.

// As an example consider the arrays a = [1,2,3] and b = [2,5,5]
// a[0] < b[0] -> c = [a[0]] = [1]
// a[1] = b[0] -> c = [a[0], b[0]] = [1,2]
// a[1] < b[1] -> c = [a[0], b[0], a[1]] = [1,2,2]
// a[2] < b[1] -> c = [a[0], b[0], a[1], a[2]] = [1,2,2,3]
// No more elements in a -> c = [a[0], b[0], a[1], a[2], b[1], b[2]] = [1,2,2,3,5,5]

// so...
// mergesort(a,b) ...should return... [1,2,2,3,5,5]

let array1 = [1, 2, 3];
let array2 = [2, 5, 5];

// let mergeArrays=(a, b)=>{
//   let array3=[];
//   let test = 1000;
//   for (let i =0 i<a.length; i++){
//     for (let j=0; j<b.length; j++){
//       if(a[i]< test){
//         test = a[i]
//         if(test <= b[j]){
//           array3.push(test)
//         }
//         array3.push(test)
//       }
//     }
//   }

//   console.log(array3)
// }
function merge(a, b) {
    let m = [...b];
    for (let n of a)
        for (let i in m) {
            if (n < m[i]) {
                m.splice(i, 0, n);
                break;
            }
            if (Number(i) + 1 === m.length)
                m.push(n);
        }
    return m;
}
merge(array1, array2)
//___________________________________________________________________________
//  Write a function called "addFullNameProperty".

// Given an object that has a "firstName" property and a "lastName" property, 
// "addFullNameProperty" returns a "fullName" property whose value is a string 
// with the first name and last name separated by a space.
function addFullNameProperty(obj) {

    obj.fullName = obj.firstName + " " + obj.lastName;
}
//___________________________________________________________________________
//  Write a function called "isPersonOldEnoughToDrinkAndDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether 
// the given person is old enough to legally drink and drive in the United States.
// Notes:* The legal drinking age in the United States is 21.* The legal driving age 
// in the United States is 16.* It is always illegal to drink and drive in the United States.
function isPersonOldEnoughToDrinkAndDrive(person) {
    // your code here
    if (person < 16) {
        return false;
    } else {
        return false;
    }
}
let person = {
    age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(person)
console.log(output)
//___________________________________________________________________________
// Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property, 
// "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
// Notes:* The legal driving age in the United States is 16.

function isPersonOldEnoughToDrinkAndDrive(person) {
  // your code here
 if (person < 16){
   return false;
 }else {
   return false;
 }
}
let person = {
  age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(person)
console.log(output)
//___________________________________________________________________________
//  Write a function called "isPersonOldEnoughToVote".

// Given a "person" object, that contains an "age" property,
//  "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.

// Notes:* The legal voting age in the United States is 18.
function isPersonOldEnoughToVote(obj) {
  // your code here
  obj = {
    age: 19
  }
  if(person.age < 18){
    return false;
  }else {
    return true;
  }
}
console.log(isPersonOldEnoughToVote(17))
//___________________________________________________________________________
// Write a function called "getNthElement".
// Given an array and an integer, "getNthElement" 
// returns the element at the given integer, within the given array.
// Notes:* If the array has a length of 0, it should return 'undefined'.

function getNthElement(array, n) {
  return array[n];
}
//___________________________________________________________________________
// Write a function called "getFirstElement".

// Given an array, "getFirstElement" returns the first element of the given array.
// Notes:* If the given array has a length of 0, it should return undefined.

// var output = getFirstElement([1, 2, 3, 4, 5]);
// console.log(output); // --> 1
function getFirstElement(array) {
  return array.shift()
}
//___________________________________________________________________________
// Write a function called "getLastElement".

// Given an array, "getLastElement" returns the last element of the given array.
// Notes:* If the given array has a length of 0, it should return 'undefined'.

// var output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4
function getLastElement(array) {
return array.pop();
}
//___________________________________________________________________________
//  Write a function called "addToFront".

// Given an array and an element, "addToFront" adds the given element to 
// the front of the given array, and returns the given array.

// Notes: * It should be the SAME array, not a new array.

// var output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2]
function addToFront(arr, element) {
  arr.unshift(element)
  return arr
}
//___________________________________________________________________________
//  Write a function called "addToBack".

// Given an array and an element, "addToBack" returns 
// the given array with the given element added to the end.

// Note: It should be the SAME array, not a new array.
function addToBack(arr, element) {
  arr.push(element)
  return arr;
}
//___________________________________________________________________________
//  Write a function called "computeAreaOfARectangle".

// Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.
function computeAreaOfARectangle(length, width) {
    let temp = length * width;
  return temp;
}
//___________________________________________________________________________
// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle,
//  "computePerimeterOfARectangle" returns its perimter.
function computePerimeterOfARectangle(length, width) {
  let temp = (length + width)*2;
  return temp;
}
//___________________________________________________________________________
// Write a function called "computePerimeterOfATriangle".
// Given 3 sides describing a triangle,
// "computePerimeterOfATriangle" returns its perimter.

function computePerimeterOfATriangle(side1, side2, side3) {
    let temp = side1+side2+side3;
    return temp;
}
//___________________________________________________________________________
// Write a function called "computePerimeterOfACircle".

// Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.

function computePerimeterOfACircle(radius) {
  let temp = 2*Math.PI*radius;
  return temp;
}
//___________________________________________________________________________
// Write a function called "computeSquareRoot".

// Given a number, "computeSquareRoot" returns its square root.
function computeSquareRoot(num) {
  // your code here
 return Math.sqrt(num);
}
computeSquareRoot(9)
//___________________________________________________________________________
// Write a function called "doubleSquareRootOf".

// Given a number, "doubleSquareRootOf" returns double its square root.
function doubleSquareRootOf(num) {
  // your code here 
  return Math.sqrt(num)*2;
}
doubleSquareRootOf(9)
//___________________________________________________________________________

// Write a function called "getLengthOfThreeWords".

// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  return word1.length + word2.length + word3.length;
}
console.log(getLengthOfThreeWords());
//___________________________________________________________________________
// Write a function called "joinArrays".

// Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2". 

// var output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]

// You should be familiar with the "concat" method for this problem. 
function joinArrays(arr1, arr2) {
    let temp = arr1.concat(arr2);
    return temp;

}
console.log(joinArrays())
//___________________________________________________________________________
// Write a function called "getElementsAfter".

// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
// console.log(output); // --> ['d', 'e']
let arr = ['a', 'b', 'c', 'd', 'e'];
function getElementsAfter(array, n) {
  return array.slice(n+1)

}
getElementsAfter(arr, 2);
//___________________________________________________________________________
//  Write a function called "getElementsUpTo".

// Given an array and a index, "getElementsUpTo", 
// returns an array with all the elements up until, but not including, the element at the given index.

// Notes:* In order to do this you should be familiar with the 'splice' method.

let arr = [1,2,3,4,5,6]

function getElementsUpTo(array, n) {
    return array.slice(0, n) 
}
getElementsUpTo(arr, 3)
//___________________________________________________________________________
// Write a function called "getAllElementsButFirst".

// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

// let arr = [1,2,3,4,5,6]
function getAllElementsButFirst(array) {
    array.shift();
    return array; 
  }
//___________________________________________________________________________
// Write a function called "getAllElementsButLast".

// Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3]

let arr = [1,2,3,4,5]
function getAllElementsButLast(array) {
 array.pop()
 return array
}
getAllElementsButLast(arr) 
//___________________________________________________________________________
// Write a function called "removeFromFront".

// Given an array, "removeFromFront" returns the given array with its first element removed.
// Notes:* You should be familiar with the method 'shift'.

// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]


function removeFromFront(arr) {
  arr.shift()
  return arr;
}
//___________________________________________________________________________
//  Write a function called "removeFromBackOfNew".

// Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

// Notes:* You should be familiar with the 'slice' method.

// var arr = [1, 2, 3];
// var output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3]
let array = [1,2,3]
function removeFromBackOfNew(arr) {
  let arry = arr.slice()
  arry.pop();
  return arry
}
removeFromBackOfNew(array)

//___________________________________________________________________________
// Write a function called "removeFromFrontOfNew".

// Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

// Notes:* You should be familiar with the 'slice' method.

// var arr = [1, 2, 3];
// var output = removeFromFrontOfNew(arr);
// console.log(output); // --> [2, 3]
// console.log(arr); // --> [1, 2, 3]

function removeFromFrontOfNew(arr) {
  let temp = arr.slice(1,arr.length)
  return temp;
}
removeFromFrontOfNew(arr)
//___________________________________________________________________________
// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3
function countCharacter(str, char) {
  let arr = str.split("");
  console.log(arr)
  let result = 0;
  for (let i in arr){
    if(arr[i] == char){
      result ++;
    }
  }
  return result;
}
countCharacter(str, char);
//___________________________________________________________________________
// Write a function called "getAllLetters".

// Given a word, "getAllLetters" returns an array containing every character in the word. 
// Notes:* If given an empty string, it should return an empty array.

// var output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
function getAllLetters(str) {
  // your code here
 return  str.split("")
}
//___________________________________________________________________________
// Write a function called "getAllWords".

// Given a sentence, "getAllWords" returns an array containing every word in the sentence. 
// Notes:* If given an empty string, it should return an empty array.

// var output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']
let str = 'Radagast the Brown';
function getAllWords(str) {
  if(str === 0 || str === ""){
    let arr = [];
    return arr;
  }else
 return str.split(" ")
}
getAllWords(str)
//___________________________________________________________________________
// Write a function called "removeFromBack".

// Given an array, "removeFromBack" returns the given array with its last element removed.

// Notes:* You should be familiar with the method 'pop'.

// var output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]
function removeFromBack(arr) {
  // your code here
  arr.pop()
  return arr;
}
//___________________________________________________________________________
//  Write a function called "isEitherEvenOrAreBoth7".

// Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true
function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if(num1 % 2 == 0 || num2 % 2 == 0){
    return true
  }else if (num1 === 7 && num2 === 7){
    return true
  }else {
    return false;
  }
}
//___________________________________________________________________________
//  Write a function called "isEitherEvenAndLessThan9".

// Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

// var output = isEitherEvenAndLessThan9(2, 4);
// console.log(output); // --> true

// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false
function isEitherEvenAndLessThan9(num1, num2) {
  if(num1 % 2 === 0 && num1 < 9 && num2 %2 !==0 && num2 < 7){
    return true
  }
  else if (num2 % 2 === 0 && num2 < 9 && num1 %2 !==0 && num1 < 9)
    return true;
  else if (num1 % 2 === 0 && num1 < 9 && num2 %2==0 && num2 < 9)
    return true;
  else 
    return false;
}
console.log(isEitherEvenAndLessThan9(8, 9))
//___________________________________________________________________________
// Write a function called "extend".

// Given two objects, "extend" adds properties from the 2nd object to the 1st object.

// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.

// var obj1 = {
//   a: 1,
//   b: 2
// };
// var obj2 = {
//   b: 4,
//   c: 3
// };
// extend(obj1, obj2);
// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3,
  d: 5
};

function extend(obj1, obj2) {
  for (let [key, value] of Object.entries(obj1)){
    for (let [chave, valor] of Object.entries(obj2)){
        if(key == chave){
          delete obj2[chave]
        }
      }
    }
  let result = Object.assign(obj1, obj2)
  return result;
}
console.log(extend(obj1, obj2))

//-----------------------------------------
// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" 
// removes any properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
let num = 5;
function removeNumbersLargerThan(num, obj) {
  // your code here
  console.log(num)
  for(let [key, value] of Object.entries(obj)){
    if(value !== String && value > num){
      delete obj[key]
    }
  }
  return obj
}
removeNumbersLargerThan(num, obj)
//-----------------------------------------------
// Write a function called "removeNumbersLessThan".

// Given a number and an object, "removeNumbersLessThan" 
// removes any properties whose values are numbers less than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }
function removeNumbersLessThan(num, obj) {
  Object.entries(obj).forEach(([key, value])=>{
    if(value !== String && value < num){
      delete obj[key]
    }
  })
  return obj
}

//-----------------------------------------------
// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" 
// removes any properties on the given object whose values are strings longer than the given number.

// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// };
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }
function removeStringValuesLongerThan(num, obj) {
  // your code here
// console.log(obj.name.length)
  for(let [key, value] of Object.entries(obj)){
    let str = value.length
    if(str > num){
      delete obj[key]
    }
  }
  return obj;
}
removeStringValuesLongerThan(6, {
  name: 'Montana',
  age: 20,
  location: 'Texas'
})
//-----------------------------------------------
// Write a function called "removeEvenValues".

// Given any object, "removeEvenValues" removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }
function removeEvenValues(obj) {
  // your code here
  for(let [key, value] of Object.entries(obj)){
    if(value%2 == 0){
      delete obj[key]
    }
  }
  return obj;
}
//-----------------------------------------------
// Write a function called "countNumberOfKeys".

// Given an object, "countNumberOfKeys" returns how many properties the given object has.

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// var output = countNumberOfKeys(obj);
// console.log(output); // --> 3
function countNumberOfKeys(obj) {
  let result=0;
  for(let key in obj){
    result++
  }
  return result;
}
countNumberOfKeys({
  a: 1,
  b: 2,
  c: 3
})
