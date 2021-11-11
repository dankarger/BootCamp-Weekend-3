function tribunaci(n,signature) {
    if(n===0)return [];
    if(n===1)return signature[0]
    if(n===2)return signature[1]
    if(n===3)return signature[2]
    let result=signature;
    for(let i=3;i<=n;i++){
        result.push(result[i-3]+result[i-2]+result[i-1])
    }
    return result[result.length-1];
}
console.log(tribunaci(9,[1,1,1]))