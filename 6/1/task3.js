// function fib(n){
//     if (n<=1){
//         return n
//     }
//     return fib(n-1) + fib(n-2)
// }

function fib(n){
    let start = 1
    let i = 1
    for (n; n-2 > 0; n--){
        let temp = start + i
        start = i
        i = temp
    }
    return i
}

console.log(fib(77))