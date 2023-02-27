function randomInteger(min, max){
    max += 1
    let rand = min + Math.random() * (max - min)

    return Math.floor(rand)
}


console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))
console.log(randomInteger(1, 3))

