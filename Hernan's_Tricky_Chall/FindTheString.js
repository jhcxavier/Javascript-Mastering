//Find the piece of string 'joao'

let arr = ['a','b','c','d','sdfjoaolk',5,6]
let obj = {'d':'fds','55':arr}
//Do not refer to the two lines above
let x = {
    '1': [3,65,234,'sdf','12',arr],
    '2': 'sdflkjoalk',
    '3': {'00':888,'lk':obj},
    '4': [4,65,obj]
}
//Code below this line
//----------------------------------------------
//the answer

function recurse(a) {
    if (typeof a === 'string') {
        if (a.includes('joao'))
        console.log(a);
    }
    else if (typeof a === 'object') {
        let arr = Array.isArray(a) ? a : Object.values(a);
        for (let e of arr)
        recurse(e);
    }
    
}
console.log(recurse(x))

//------------------------------------------------
//Second Attempt

// function toArray(obj) {
    //   const result = [];
    //   for (const prop in obj) {
        //     const value = obj[prop];
        //     if (typeof value === 'object') {
            //       result.push(toArray(value));
            //     } else {
                //       result.push(value);
                //     }
                //   }
                
                //   return result;
                // }
                
                // console.log(toArray(x));
                //--------------------------------------------------
                // First Attempt
                
// let arr1 = []
// for (let value of Object.values(x)) {
//     for(let i = 0; i<value.length; i++){
//       if(value[i].constructor === Array){
//         console.log("Array", value[i])
//       }else if (value[i].constructor === Object){
//         console.log("Object", value[i])
//       }else{
//         console.log(value[i])
//       }
//     }
// }
// console.log(arr1)