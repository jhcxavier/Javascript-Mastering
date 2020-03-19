//  What is a callback and its role? In its simplest terms, 
//  a callback function is a function that is called inside of another function. 
//  In other words, whenever you pass a function in the arguments 
//  and run it inside this function you're doing the callback pattern.

const calc = () =>{
    return 4 * 3;
}

const printCalc = (callback)=>{
    console.log(callback())
}

printCalc(calc);