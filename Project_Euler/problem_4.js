// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largPal(digits){
    let i, max, min, d, inf, sup, limit, number = 0;
    for (i =1; i<digits; i++){
        number=10 * number +9;
    }
    inf = number; // 99
    sup = 10 * number + 9; //999

    function isPal(n){
        let p = 0, q = n, r;
        while(n>0){
            r = n % 10; // last number in n
            p = 10* p + r; // last number
            n = Math.floor(n/10);
        }
        return p === q;
    }

    for(max = sup * sup, min = inf * inf; max> min; max -= 1){
        if(isPal(max)){
            limit = Math.ceil(Math.sqrt(max));
            d = sup;
            while(d >= limit){
                if (max % d === 0 && max / d > inf){
                    return max;
                }
                d --;
            }
        }
    }
    return NaN;
}
console.log(largPal(3))

//Result 906609!!