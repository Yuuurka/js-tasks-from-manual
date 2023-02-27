function getDateAgo(date, days) {
    let dateNew = new Date(date)
    dateNew.setDate(date.getDate() - days)

    return dateNew.getDate()
}

console.log(getDateAgo(new Date(), 365))