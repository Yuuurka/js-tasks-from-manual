function unique(arr){
    let uniqueArr = []

    for (let obj of arr){
        if (uniqueArr.indexOf(obj) === -1){
            uniqueArr.push(obj)
            arr = arr.filter((n) => {return n !== obj})
        }
    }

    return uniqueArr
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );