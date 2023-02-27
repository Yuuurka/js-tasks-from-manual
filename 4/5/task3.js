function Accumulator(startingValue) {

    this.read = function(){
        newValue = Number(prompt("Добавьте число")) || 0
        startingValue += newValue
    }

    this.value = function(){
        return startingValue
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value())