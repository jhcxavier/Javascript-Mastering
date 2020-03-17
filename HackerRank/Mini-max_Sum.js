// Given five positive integers, find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of 
// two space-separated long integers.

// For example, arr = [1,3,5,7,9]. Our minimum sum is 1+3+5+7 = 16 and our maximum sum is 3+5+7+9=24. We would print 16 24.

// Function Description

// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: 

// the minimum sum and the maximum sum of 4 of 5 elements.

// miniMaxSum has the following parameter(s):

// arr: an array of 5 integers.

let arr = [256741038, 623958417, 467905213, 714532089, 938071625]

function miniMaxSum(arr) {

    let maxNum = Math.max(...arr)
    let minNum = Math.min(...arr)

    let result = arr.reduce((value, result)=>{
        return value + result;
    },0)
   
    let max = result-minNum;
    let min = result-maxNum;
  
    console.log(min+" "+max);
}
console.log(miniMaxSum(arr))