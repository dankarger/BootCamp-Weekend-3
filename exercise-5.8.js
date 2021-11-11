function findLongestWord(str) {
    let arr=str.split(' ');
    let longestWord = arr[0].length;
    arr.forEach(element=> element.length>longestWord?longestWord=element.length:longestWord)
    return longestWord;
}

console.log(findLongestWord('this is a test'))