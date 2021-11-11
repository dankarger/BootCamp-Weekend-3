//First option of fibunaci
function fibonaci(n) {
    let arr = [1,1];
    if(n===1||n===2){
        return 1;
    }
    for(let i=2;i<=n;i++) {
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr[arr.length-1]
}

//Test
for(let i=1;i<=12;i++){
   console.log( fibonaci(i))
}

//Second option of fibonaci
function fibonaci2(n) {
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
//Test
for(let i=1;i<=12;i++){
    console.log( fibonaci2(i))
}
