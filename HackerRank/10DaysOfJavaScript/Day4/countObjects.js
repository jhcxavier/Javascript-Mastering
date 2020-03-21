// Objective

// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer 
// properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x==o.y.

// Input Format

// The first line contains an integer denoting n.
// Each of the n subsequent lines contains two space-separated integers describing the values of x and y.
let objects = [{x:1, y:1},{x:2, y:3},{x:3, y:3},{x:3, y:4},{x:5, y:5}]
function getCount(objects) {
    let result= 0;
    for(let values of Object.values(objects))
        if(values.x == values.y)
            result++
    return result;
}
console.log(getCount(objects))