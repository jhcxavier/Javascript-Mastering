// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//  Divisor Multiplier Total
//   1       1           1
//   2       2           2
//   3       3           6
//   4       2           12
//   5       5           60
//   6       1           60
//   7       7           420
//   8       2           840
//   9       3           2520
//   10      1           2520
//

const smallestMult = function(n){
    const mults = [];
    for(let i = 1; i <= n; i++){
        let newMult=i;
        mults.forEach(function(mult){
            if(newMult % mult == 0){
                newMult /= mult;
            }
        })
        mults.push(newMult)
    }
    return mults.reduce((product = 1, mult) => product *= mult);

}
console.log(smallestMult(20))