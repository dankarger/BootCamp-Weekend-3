function findLongestWord(str) {
    //Array of words from the string
    let arr=str.split(' ');
    //Variable to store the longest word,
    //Initial value is the first word of the array
    let longestWord = arr[0];
    //For each loop that iterate between the words and comparing the length with the variable
    //If the word is longer than the variable, replace the variable with new word
    arr.forEach(element=> element.length>longestWord.length ? longestWord = element: longestWord)
    return longestWord;
}

console.log(findLongestWord('this is a test blablabla'))