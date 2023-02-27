let calculator = {
    number1: 0,
    number2: 0,

    read(number1, number2){
        this.number1 = number1
        this.number2 = number2
    },

    sum(){
        return this.number1+this.number2
    },

    mul(){
        return this.number1*this.number2
    }
};

calculator.read(3, 2);
console.log( calculator.sum() );
console.log( calculator.mul() );