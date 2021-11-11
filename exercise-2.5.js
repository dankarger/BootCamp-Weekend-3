const findSummation2= n => {
    let sum=0;
    //For loop to iterate through 1 to n, and adding to the sum variable
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum;
}

//Test
console.log(findSummation2(3));
console.log(findSummation2(8));