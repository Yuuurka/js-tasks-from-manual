function getAverageAge(users){
    let midAge = 0
    for (let user of users){
        midAge += user.age
    }

    return midAge/users.length
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log(getAverageAge(arr));
