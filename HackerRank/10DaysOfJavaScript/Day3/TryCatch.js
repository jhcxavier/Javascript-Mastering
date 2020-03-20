// Objective

// In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

// Task

// Complete the reverseString function; it has one parameter, s. You must perform the following actions:

// Try to reverse string s using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Input Format

// Locked stub code in the editor reads variable s from stdin and passes it to the function.

// Output Format

// You must write two print statements using console.log():

// Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

// Sample Input 0
// "1234"

// Sample Output 0
// 4321

//  s = Number(1234) is not a string type, so it can't be reversed using string functions. When we try to reverse it anyway, 
//  it throws an exception. We then catch the exception and print its message, which is s.split is not a function. 
//  Next, we finally print s which, because it wasn't able to be reversed, is Number(1234).

let s = "abcd"
// let s = "1234"
// let s = 1234
function getSecondLargest(s) {

  try{
     let temp = s.split("")
     temp.reverse();
     temp = temp.join('')
     parseInt(temp) == NaN ? console.log(temp) : parseInt(temp);
     console.log(temp);
  }
  catch(err){
      if(err){
        let message = "s.split is not a function"
        console.log(message)
        return s;
      }
    }

  
}
console.log(getSecondLargest(s))