function centuryFromYear(year) {
    //Divide year by 100 to find the century
    let century = Math.floor(year/100);
    //if year %100 more than 0 that mean we need to add 1 to the century count
    if (year%100>0){
        century++;
    }
    return century;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));