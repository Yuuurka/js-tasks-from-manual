const userPost = prompt("Кто там?")
const adminPassword = "Я главный"

if (userPost === 'Админ'){

    enteredPassword = prompt("Введите пароль")

    if (adminPassword === enteredPassword){
        alert("Здравствуйте!")
    }else if (enteredPassword === null){
        alert("Отменено")
    }else{
        alert("Пароль неверный")
    }

}else if (userPost === null){
    alert("Отменено")
}else{
    alert("Я вас не знаю")
}