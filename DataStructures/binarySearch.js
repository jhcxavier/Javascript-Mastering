const generateArray=()=>{
  let aux=[]
  for(let i = 0; i < 1000; i ++){
    aux.push(i)
  }
  return aux
}
// console.log(generateArray())

const binarySearch=(arr, key)=>{
  
  let mid = Math.floor(arr.length/2)

  if(key < arr[0] || key > arr[arr.length-1])
    return "number not found"
  
  if(key === arr[mid])
    return arr[mid]
  else
    return helper(arr, key, mid)
}

const helper=(arr, key, mid)=>{
  
  if(key < arr[mid])
    return binarySearch(arr.slice(0, mid), key)
    
  else 
    return binarySearch(arr.slice(mid), key)
}
let arr = [1,2,3,4,5,7 ,8]
console.log(binarySearch(generateArray(), 1))
