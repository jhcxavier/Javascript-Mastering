let arr = [5,0, 0, -1, 1, 1]

function plusMinus(arr) {
  
  let [positive, negative, zero] = [0, 0, 0];
//   let positive = negative = zero = 0;
  let divisor = arr.length - 1;
  
  for (let i = 1; i < arr.length; i++){
    if(arr[i] > 0)
      positive += 1
    else if(arr[i]<0)
      negative += 1
    else if (arr[i] === 0)
      zero += 1
      }  
  
  positive = positive/divisor;
  negative = negative/divisor;
  zero = zero/divisor;

  return `${positive.toFixed(6)}\n${negative.toFixed(6)}\n${zero.toFixed(6)}` 

}
console.log(plusMinus(arr))