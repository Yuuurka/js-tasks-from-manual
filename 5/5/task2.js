function filterRange(arr, a, b){
    let arrD = []

    for (let elem of arr){
        if (a <= elem && elem <= b){
            arrD.push(elem)
        }
    }

    return arrD
}

let arr = [5, 3, 8, 1]
console.log(filterRange(arr, 1, 4))