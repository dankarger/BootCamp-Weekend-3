function findLongestWord(str) {
    let arr=str.split(' ');
    let longestWord = arr[0];
    arr.forEach(element=> element.length>longestWord.length?longestWord=element:longestWord)
    return longestWord;
}

console.log(findLongestWord('this is a test blablabla'))