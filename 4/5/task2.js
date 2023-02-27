function Calculator() {

    this.read = function() {
        this.num1 = Number(prompt("Введите 1-ую переменную")) || 0;
        this.num2 = Number(prompt("Введите 2-ую переменную")) || 0;
    };

    this.sum = function() {
        return this.num1 + this.num2
    };

    this.mul = function() {
        return this.num1 * this.num2
    };
}

let calculator = new Calculator()
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())