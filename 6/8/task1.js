// function printNumbers(from, to){
//     let start = setInterval(function() {console.log(from)
//     if (from == to){
//         clearInterval(start);
//     }
//     from++},
//     1000)
// }

function printNumbers(from, to){
    setTimeout(function next() {console.log(from)
    if (from < to){
        setTimeout(next, 1000);
    }
    from++},
    1000)
}

printNumbers(1, 10);