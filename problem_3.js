// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num){

  let primeFactor = [];
  while (num % 2 === 0) {
    primeFactor.push(2);
    num = num/2;
  }

  let sqrtNum = Math.sqrt(num);
  for (let i=3; i<=sqrtNum; i++){
    while (num % i === 0){
      primeFactor.push(i);
      num = num/i;
    }
  }
  if (num > 2){
    primeFactor.push(num);
  }
  return primeFactor;
}
console.log(largestPrimeFactor(600851475143))