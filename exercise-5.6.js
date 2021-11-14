const maskify=(str)=>{
    let result = '';
    //For loop to find out if the letter is not one of the last 4 letter,
    // and replace it with '#'.
    for(let i=0;i<str.length;i++){
        if(i<str.length-4){
            result+='#';
        }else {
            //If the letter is one of the 4 last, then add it to the result string.
            result += str[i];
        }
    }
    return result;
}

//Test
console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify(''));
console.log(maskify('Skippy'));
console.log(maskify('anananananana Batman!'));