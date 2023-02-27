function camelize(str){
    str = str.split("-")
    let camelStr = str[0]
    for (let word of str){
        if (word !== str[0])
            camelStr += word.slice(0, 1).toUpperCase() + word.slice(1, word.length+1)
    }

    return camelStr
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))