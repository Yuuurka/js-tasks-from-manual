function topSalary(salaries){
    let overpaidEmployee = null
    let maxSalary = -1
    for (let [key, value] of Object.entries(salaries)){
        if (value > maxSalary){
            maxSalary = value
            overpaidEmployee = key
        }
    }

    return overpaidEmployee
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))