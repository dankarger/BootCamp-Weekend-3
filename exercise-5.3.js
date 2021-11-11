const toCamelCase = (str) => {
    let result = '';
    // if (str[0] === str[0].toUpperCase() && str[0] !== str[0].toLowerCase()) {
    //     result += str.substr(0, 1);
    // }
    for(let i =0;i<str.length;i++){
    if(str[i]==='-'||str[i]==='_'){
        result+=str[i+1].toUpperCase();
        i++;
    }else{
        result+=str[i];
    }

    }
    return result;
}

//Test
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));