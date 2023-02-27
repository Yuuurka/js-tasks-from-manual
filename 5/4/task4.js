function sumInput(){
    let arr = []

    while (true) {
        let num = prompt("Введите число")
        if (!isFinite(num) || num === "" || num === null){
            break
        }

        arr.push(+num);
    }

    let result = 0

    for (let num of arr){
        result += num
    }

    return result
}