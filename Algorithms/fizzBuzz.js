//Recursion
function fizzBuzz(num, index){
    
    if(index % 15 === 0) console.log("FizzBuzz")
    else if(index % 3 === 0) console.log("Fizz")
    else if(index % 5 === 0) console.log("Buzz")
    else console.log(index)
    if(index < num){
        fizzBuzz(num, index + 1)
    }
}

// Iteration
function fizzBuzz2(num){
    for(let index = 0; index <= num; index++){
        if(index % 15 === 0) console.log("FizzBuzz")
        else if(index % 3 === 0) console.log("Fizz")
        else if(index % 5 === 0) console.log("Buzz")
        else console.log(index)
    }
}
// console.log(fizzBuzz(100, 1))
console.log(fizzBuzz2(100))