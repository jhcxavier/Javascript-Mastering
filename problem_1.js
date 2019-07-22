//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

// function min(a, b){
//     return a > b ? a : b;       //finding the minimum between 3 and 5.
// }

// function multiples(a, b, limit){
//     let m = min (a, b);
//     let sum = 0;
//     for (let i = m; i<limit; i++){
//         if (i % a === 0 || i % b ===0)
//         sum += i;
//     return sum
//     }
// }
// console.log(multiples(3, 5, 1000))


function sumOfMultiple(limit){
    let i, sum = 0;
    for (i = 3; i < limit; i += 1){
        if (i % 3===0 || i % 5===){
            sum += i;
        }
    }
    return sum
}
console.log(sumOfMultiple(1000));