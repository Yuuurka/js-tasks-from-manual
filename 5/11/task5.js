function getLastDayOfMonth(year, month){
    month++
    let day = 0
    return (new Date(year, month, day)).getDate()
}


console.log(getLastDayOfMonth(2012, 1))