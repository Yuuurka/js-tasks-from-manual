let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumProps(someObj){
    let result = 0

    for (let key in someObj){
        result += someObj[key]
    }

    return result
}

console.log(sumProps(salaries))