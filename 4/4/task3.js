let ladder = {
    step: 0,
    up() {
        this.step++;
        return ladder
    },
    down() {
        this.step--;
        return ladder
    },
    showStep() { // показывает текущую ступеньку
        console.log( this.step );
        return ladder
    }
};

ladder.up().up().down().showStep().down().showStep();