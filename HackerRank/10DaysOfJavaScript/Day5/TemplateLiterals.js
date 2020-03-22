//I am not going to put the description because this is a very bad exercise for Hackathon standarts. But you can find accessing this link.
//https://www.hackerrank.com/challenges/js10-template-literals/problem

const sides =(literals, ...expressions)=>{
    //   let temp = expressions;
    //   let arr = []
    //   let s1 = 0;
    //   let s2 = 0;
    //   let P;
    //   let A;
    //   for(let i =0; i<temp.length; i++){
    //     let result = temp[i]
    //     for(let i = 0; i<result.length; i++){
    //       A = result[i];
    //       P = result[i + 1];
    //       s1 = (P+Math.sqrt(P*P-16*A))/4
    //       s2 = (P-Math.sqrt(P*P-16*A))/4
    //       arr.push(s1, s2)
    //       break;
    //       arr.push(result[i])
    //      }
         
    //    }
    //   arr.sort((a,b)=>{
    //     return b-a
    //   })
    //   return arr;
    let A = expressions[0];
    let P = expressions[1];
    let result = [];
    let s1 = (P+Math.sqrt(Math.pow(P, 2)-16*A))/4;
    let s2 = (P-Math.sqrt(Math.pow(P, 2)-16*A))/4;
    result.push(s1, s2);
    return result.sort();
}
console.log(sides(literals, expressions))