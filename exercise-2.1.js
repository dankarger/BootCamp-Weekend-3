function sumTwoNum(array) {
    //Find the first lowest number
    const firstNum = Math.min(...array);
    //Removing that number from the array
    array.splice(array.indexOf(firstNum),1);
    //Find the second lowest number
    const secondNum = Math.min(...array)
    //Returning the sum of the two numbers
    return firstNum + secondNum

}

//test
console.log(sumTwoNum([19, 5, 42, 2, 77]));
console.log(sumTwoNum([10, 343445353, 3453445, 3453545353453]))