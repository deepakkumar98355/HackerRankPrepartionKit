function hourGlassBruteForceMethod() {
    let arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]

    let resultArray = []


    for (let i = 0; i < arr.length; i++) {
        let firstArray = arr[i]
        let secondArray = arr[i + 1]
        let thirdArray = arr[i + 2]

        if (thirdArray) {
            for (let itr = 0; itr < ((firstArray.length / 2) + 1); itr++) {
                let sum = getSumFromArray([firstArray.slice(itr, itr + 3), secondArray.slice(itr + 1, itr + 2), thirdArray.slice(itr, itr + 3)])
                resultArray.push(sum)
            }
        } else {
            break
        }

    }
    resultArray.sort(compare)

    return resultArray.sort(compare)[0]
}

function getSumFromArray(arr) {
    let arrSum = 0

    for (let i = 0; i < arr[0].length; i++) {
        console.log(arr[i])
        for (let j = 0; j < arr[i].length; j++) {
            arrSum += Number(arr[i][j])
        }
    }

    return arrSum

}

function compare(a, b) {
    return b - a
}

function hourGlassOptimalMethod() {
    //Time Complexity = O(n*m)
    //Space Complexity = O(1)

    let arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]

    let maxSum = -63

    for (let i = 0; i < arr.length - 2; i++) {
        for (j = 0; j < arr[0].length - 2; j++) {
            let currentSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
            if (currentSum > maxSum)
                maxSum = currentSum
        }
    }
    return maxSum
}

// hourGlassBruteForceMethod()
hourGlassOptimalMethod()