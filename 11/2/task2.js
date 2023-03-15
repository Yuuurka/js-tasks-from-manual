function delay(ms) {
    return new Promise(function (resolve, reject){
        setTimeout(resolve, ms)
    })
}

delay(10000).then(() => console.log('выполнилось через 10 секунд'));
delay(1000).then(() => console.log('выполнилось через 1 секунду'));