function sum(num) {

    function next(num2) {
        num = num + num2;
        return next;
    }

    next.toString = () => num;
    return next;
}


console.log(sum(5)(5)(3) == 13);
console.log(sum(5)(10)(3) == 18);
console.log(sum(-5)(5)(3)(1) == 4);