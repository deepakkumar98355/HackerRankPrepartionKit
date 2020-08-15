function minimumSwapsBruteForce(arr) {
    let swapCount = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            swapCount++
            swapArray(arr, i, i + 1)
        }
        console.log(arr)

    }

    return swapCount

}

function swapArray(inputArr, value1, value2) {
    let temp = inputArr[value1]
    inputArr[value1] = inputArr[value2]
    inputArr[value2] = temp

}


// minimumSwapsOptimal([4, 3, 1, 2])
minimumSwapsBruteForce([4, 3, 1, 2])
