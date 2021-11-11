function binaryConvert(arr) {
    return  parseInt(arr.join(''),2)
}

//Test
console.log(binaryConvert([0, 0, 0, 1]))
console.log(binaryConvert([1,0,0,0,1,1]))