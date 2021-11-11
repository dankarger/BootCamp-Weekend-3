const toWeirdCase=string =>{
    let result='';
    for(let i=0;i<string.length;i++) {
        if(i%2===0){
            result+=string[i].toUpperCase();
        }else{
            result+=string[i];
        }
    }
    return result;
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));