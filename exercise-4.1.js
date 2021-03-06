function fibonaci(n,start) {
    //If starting point is 1
    if(start===1) {
        //Starting array
        let arr = [1, 1];
        //If n is 1 or 2 return 1
        if (n === 1 || n === 2) {
            return 1;
        }
        //Calculating the numbers of the series
        for (let i = 2; i <= n; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
        return arr[arr.length - 1]
    }
    //If starting point is 0
    if(start===0) {
        let arr = [0,1,1];
        if(n===1){
            return 0;
        }
        if(n===2||n===3){
            return 1;
        }
        for(let i=3;i<=n;i++) {
            arr.push(arr[i-2]+arr[i-1]);
        }
        return arr[arr.length-1]
    }
}

//Test
for(let i=1;i<=12;i++){
   console.log( fibonaci(i,1))
}
