let user = {
    name: "John",
    years: 30
};

let [name, age, isAdmin = false] = Object.values(user)

console.log(name)
console.log(age)
console.log(isAdmin)