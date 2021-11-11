function findShortestWord(str) {
    let arr=str.split(' ');
    let shortestWord = arr[0].length;
    arr.forEach(element=> element.length<shortestWord?shortestWord=element.length:shortestWord)
    return shortestWord;
}

console.log(findShortestWord('this is a test'))