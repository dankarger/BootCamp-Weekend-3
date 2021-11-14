const toCamelCase = (str) => {
    let result = '';
    // For loop to iterate between the characters of the string
    for(let i =0;i<str.length;i++){
    //If the character is dash or lower dash then uppercase the next character
    if(str[i]==='-'||str[i]==='_'){
        result+=str[i+1].toUpperCase();
        //Add one to the i variable to skip the character that was just uppercase
        i++;
    }else{
        //If not dash or lower dash then add the character to the result
        result+=str[i];
    }
    }
    return result;
}

//Test
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));