// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// ar: an array of integers .
// Input Format

// The first line of the input consists of an integer n.
// The next line contains n space-separated integers contained in the array.

// Output Format

// Print the integer sum of the elements in the array.

// Constraints
// 1 <= n <= 10
// 0 <= ar[i] <= 10 exp 10

// Note:
// The range of the 32-bit integer is [-2147483648, 2147483647].
// When we add several integer values, the resulting sum might exceed the above range. 
// You might need to use long long int in C/C++ or long data type in Java to store such sums.
let arr = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    const min = -2147483648;
    const max = 2147483647;
    let result=0;
    let i;

    if(ar[i] < min && ar[i] > max)
        return false;
  
    for(let i=0; i<ar.length; i++)
        if(ar[0]>= 1 && ar[0]<=10)
            ar[0] = 0;
        else if(ar[i] >= 0 && ar[i] <= 10^10)
            result+=ar[i];
    
    return result;
}
console.log(aVeryBigSum(arr))