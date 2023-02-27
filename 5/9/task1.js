function sumSalaries(salaries){
    let sumArr = Object.values(salaries)
    let sumValue = 0
    for (let salary of sumArr){
        sumValue += salary
    }

    return sumValue
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries))