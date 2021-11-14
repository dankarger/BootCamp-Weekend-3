function peoplaeOnBus(arr) {
    //Variable for how many people are on the bus
    let people = 0;
    //Foreach loop that calculate
    // how many people got on and off the bus each stop
    arr.forEach(element=>{
        people -= element[0];
        people += element[1];
    })
    return people;
}

//Test
console.log(peoplaeOnBus([[0,4],[2,5],[2,1],[5,6]]));
console.log(peoplaeOnBus([[0,5],[2,2],[2,1],[1,2]]))