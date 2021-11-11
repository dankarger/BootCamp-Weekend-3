function nb_year(p0,percent,aug,p) {
    //count variable to count years need to reach goal
    let count=0;
    //make the percent variable to the right format to calculate
    const percentCon = percent/100;
    const firstYear = p0+(p0*percentCon)+aug;
    let p1 = p0;
    //Recursive function to calculate the growth of population until reaching the goal,
    // Each time the function run adding 1 to count
    function recursive(p1) {
        //checking if the goal has been reach, if yes than returning the count value
        if(p1>=p) {
            return count;
        }
        count +=1;
        p1=p1+(p1*percentCon)+aug;
        return recursive(p1)
    }
    //Runing the recursive function
    return recursive(p1)

}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1000,2,50,1200))
console.log(nb_year(1500000, 2.5, 10000, 2000000))