function hourGlass() {
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

hourGlass()