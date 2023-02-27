function getSecondsToTomorrow(){
    let tomorrow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1)
    let now = new Date()

    return (tomorrow - now) / 1000
}

console.log(getSecondsToTomorrow())