// Consider a staircase of size n=4:

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer

function staircase(n) {
    let space = " ";
    let sign = "#";
    // console.log(sign)
    for(let i = n; i>0;i--){
    // console.log(n)
        console.log(space.repeat(i-1)+sign.repeat(n-i+1))
    
    }

}
staircase(10)