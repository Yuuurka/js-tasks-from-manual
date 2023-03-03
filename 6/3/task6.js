function byField(param){
    return (a, b) => a[param] > b[param] ? 1 : -1
}




let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));