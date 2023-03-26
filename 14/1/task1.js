let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver){
            if (target.hasOwnProperty(prop)){
                return Reflect.get(target, prop, receiver);
            }
            return `Свойство ${prop} не существует`;
        }
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует