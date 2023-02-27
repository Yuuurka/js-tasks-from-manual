function pow(degreeBase, degreeIndicator){
    if ((degreeBase % 1 !== 0 && degreeBase >= 1)
        || (degreeIndicator % 1 !== 0 && degreeIndicator >= 1)){
        return "Функция поддерживает только натуральные значения"
    }

    let result = degreeBase

    while (degreeIndicator !== 1) {
        result *= degreeBase
        degreeIndicator--
    }

    return result
}


degreeBase = Number(prompt("Введите основание степени"))
degreeIndicator= Number(prompt("Введите показатель степени"))

alert( pow(degreeBase, degreeIndicator) )