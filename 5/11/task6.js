function getSecondsToday(){
    let startDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    let now = new Date()

    return (now - startDay) / 1000
}

console.log(getSecondsToday())