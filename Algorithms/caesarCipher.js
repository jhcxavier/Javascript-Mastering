const caesarCipher =(str, num)=>{
    let lowerCaseString = str.toLowerCase()
    let alphabet=[...Array(26)].map(_=>String.fromCharCode(i++),i=97).join``.split('')
    let newString = ''

    for(let i in lowerCaseString){
        
        let currentLetter = lowerCaseString[i];
        if(currentLetter === ' '){
            newString += currentLetter
            continue
        }
        
        let currentIndex = alphabet.indexOf(currentLetter)
        
        let newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26
        if(newIndex < 0) newIndex = 26 + newIndex;
        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase()
        }else{
            newString += alphabet[newIndex]
        }
    }
    return newString;
}
console.log(caesarCipher(" hello", 2))