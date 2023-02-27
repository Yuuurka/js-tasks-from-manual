function formatDate(date){
    let now = new Date()
    let diff = now - date.getTime()
    let secs = diff/1000
    if (secs < 1){
        return "Прямо сейчас"
    }else if (secs < 60){
        return `${secs} секунд назад`
    }else if (secs < 3600){
        return `${Math.round(secs/60)} минут назад`
    }else {
        return `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    }
}


console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 29 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );