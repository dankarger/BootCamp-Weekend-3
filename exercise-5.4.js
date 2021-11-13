const toWeirdCase=string =>{
    //Result variable to show finale string
    let result='';
    //Making the string into array divided into words
    let stringArray = string.split(' ');
    //For each loop to iterate throught the words
    stringArray.forEach(word=>{
        //For loop for each word to find out the even index and capitalize the letter
            for(let i=0;i<word.length;i++) {
                if(i%2===0){
                    result+=word[i].toUpperCase();
                }else{
                    result+=word[i];
                }
            }
            //If theres were more than one word in the string, add sapce between words
            if(stringArray.length>0) {
                result += ' ';
            }
        })
    //Removing the space in the end of the string
    return result.substr(0,result.length-1);
}

//Test
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));