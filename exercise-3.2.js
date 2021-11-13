function peoplaeOnBus(arr) {
    //Variable for How many people on the bus
    let people = 0;
    //For each loop that calculate for each stop that calculate the people variable,
    // how many people got on and off the bus
    arr.forEach(element=>{
        people-= element[0];
        people+= element[1];
    })
    return people;
}

//Test
console.log(peoplaeOnBus([[0,4],[2,5],[2,1],[5,6]]));
console.log(peoplaeOnBus([[0,5],[2,2],[2,1],[1,2]]))