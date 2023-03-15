function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();
console.log(counter()); //0
console.log(counter()); //0+1=1
console.log(counter.set(100)); //100
console.log(counter.decrease()); //101+1-1=100
console.log(counter.decrease()); //99
console.log(counter.decrease()); //98