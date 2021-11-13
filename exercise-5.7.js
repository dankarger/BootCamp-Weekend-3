function findShortestWord(str) {
    //Making an array of words from the string
    let arr=str.split(' ');
    //Making a variable to store the shortest word length
    //Giving it a starting value of the first word of the array
    let shortestWord = arr[0].length;
    //For each loop to find out if each word is shorter than the variable,
    //If the word is shorter then replace the shortest variable with the new word length
    arr.forEach(element=> element.length<shortestWord ? shortestWord=element.length : shortestWord)
    return shortestWord;
}

console.log(findShortestWord('this is a test'))