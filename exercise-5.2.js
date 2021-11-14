const repeatStr=(n,str)=>{
    let result = '';
    for(let i=1;i<=n;i++) {
        result += str;
    }
    return result;
}
//Test
console.log(repeatStr(5, "Hello"));
console.log(repeatStr(4, "i"));