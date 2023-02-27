function getMaxSubSum(arr) {
    let curSum = 0
    let maxSum = 0

    for (let endIndex = 0; endIndex < arr.length; endIndex++){
        curSum += arr[endIndex]

        if (curSum > maxSum){
            maxSum = curSum
        }

        if (curSum < 0){
            curSum = 0
        }
    }

    return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0