const initial = name => {
    //Uppercase all the string and split it to a two words array
    let arr=name.toUpperCase().split(' ');
    //Return the first letter in each word with a dot between them
    return `${arr[0][0]}.${arr[1][0]}`;
}

console.log(initial('Sam Haris'));
console.log(initial('Patrick Feeney'));