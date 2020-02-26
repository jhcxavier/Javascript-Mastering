// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
// awarding points on a scale from 0 to 100 for three categories: problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge 
// to be the triplet b=(b[0], b[1],b[2]).

// Your task is to find their comparison points by comparing a[0] with b[0] ,a[1] with b[1] ,and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i]< b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

let a = [17, 28, 30];
let b = [99,6,10];
function compareTriplets(a, b) {
    if(a.length !== b.length){
        return false;
    }  
    let scoreA = 0;
    let scoreB = 0;
  
    for (let i = 0; i<a.length; i++){
        if(a[i] < b[i]){
                scoreB++;
        }else if(a[i] > b[i]){
            scoreA++;
        }
    }
    a = scoreA;
    b = scoreB;
    let arrC =[]
    arrC.push(a, b)
    return arrC;
}

console.log(compareTriplets(a, b));