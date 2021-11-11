function sumTwoNum(array) {
    const firstNum = Math.min(...array);
    array.splice(array.indexOf(firstNum),1);
    const secondNum = Math.min(...array)
    return firstNum + secondNum

}

//test
console.log(sumTwoNum([19, 5, 42, 2, 77]));
console.log(sumTwoNum([10, 343445353, 3453445, 3453545353453]))