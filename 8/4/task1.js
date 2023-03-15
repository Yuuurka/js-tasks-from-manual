let dictionary = Object.create(null,
    {
    toString: {
        value() {
            return Object.keys(this).join(",");
        }
    }
});

dictionary.apple = "Apple";
dictionary.juice = "Juice";


for(let key in dictionary) {
    console.log(key);
}

console.log(dictionary)