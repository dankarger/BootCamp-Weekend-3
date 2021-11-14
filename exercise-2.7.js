function basicOp(operator,value1,value2) {
    if(operator==='+') return value1 + value2;
    if(operator==='-') return value1 - value2;
    if(operator==='/') return value1 / value2;
    if(operator==='*') return value1 * value2;
}

//Test
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));