let schedule = {};

function isEmpty(someObj){
    for (let key in someObj){
        return false
    }

    return true
}

console.log(isEmpty(schedule))