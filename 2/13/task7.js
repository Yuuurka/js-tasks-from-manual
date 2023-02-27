function simpleNumbers(left, right){
    for (; left <= right; left++){
        let D = new Set()
        for (let i = 1; i<=Number(Math.sqrt(left))+1; i++){
            if (left % i == 0){
                D.add(i)
                D.add(left/i)
            }
        }
        if (D.size == 2){
            console.log(left)
        }
    }
}


simpleNumbers(2, 10)