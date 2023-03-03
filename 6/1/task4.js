// function printList(list){
//     while (list){
//         console.log(list.value);
//         list = list.next;
//     }
// }


function printList(list) {
    if (list != null){
        console.log(list.value);
        printList(list.next);
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