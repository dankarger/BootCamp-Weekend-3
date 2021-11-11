const maskify=(str)=>{
    let result = '';
    for(let i=0;i<str.length;i++){
        if(i<str.length-4){
            result+='#';
        }else {
            result += str[i];
        }
    }
    return result;
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify(''));
console.log(maskify('Skippy'));
console.log(maskify('anananananana Batman!'));