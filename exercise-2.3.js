function findNextSquare(n) {
    //Checking if n is an integer, if not return -1
    if(Number.isInteger(Math.sqrt(n))) {
        // for loop to check for the next perfect sqr
        for(let i = n+1; i<n*n; i++) {
             if(Number.isInteger(Math.sqrt(i))){
                 return i;
             }
        }
    }
    return -1;
}

//Test
console.log(findNextSquare(625 ))
console.log(findNextSquare(121 ))