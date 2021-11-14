function unique(arr) {
    //Making two variable to store the two options, starting with the first number of the arr as the first variable
    let count1 = [arr[0],1];
    let count2 = [0,0];
    //For loop that check if the numbers of the arr are the same as count1, if not than store it to count2
    for(let i=1;i<arr.length;i++) {
        if (arr[i] !== count1[0]) {
            count2[0] = arr[i];
            count2[1] += 1;
        } else {
            count1[1]++;
        }
    }
        //Check witch count variable has occurred only once
        return count1[1]===1?count1[0]:count2[0];
}
//Test
console.log(unique([1, 1, 1, 2, 1, 1]));
console.log(unique([0, 0, 0.55, 0, 0]));