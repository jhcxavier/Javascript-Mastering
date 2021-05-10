function isPalindrome(string){
    string = string.toLocaleLowerCase();
    let charactersArr = string.split('')
    let lettersArr = []

    charactersArr.forEach(char=>{
        if(char.match(/[a-z]/i)){
            lettersArr = [...lettersArr, char]
        }
    })
    if(lettersArr.join('') === lettersArr.reverse().join('')) return true
    else return false;
}
console.log(isPalindrome("Madam I'm Adam"))