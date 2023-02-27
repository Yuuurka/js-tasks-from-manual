function filterRangeInPlace(arr, a, b){
    for (let elem of arr){
        if (a > elem || elem > b){
           arr.splice(arr.indexOf(elem), 1)
        }
    }
}

let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
console.log(arr)
