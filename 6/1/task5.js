// function printList(list){
//     let arr = []
//     while(list){
//         arr.push(list.value);
//         list = list.next;
//     }
//
//     for (let i = -1; i >= -arr.length; i--){
//         console.log(arr.at(i));
//     }
// }

function printList(list) {
    let arr = []
    if (list != null){
        arr.push(list.value)
        printList(list.next)
    }

    for (let i = -1; i >= -arr.length; i--){
        console.log(arr.at(i));
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list)