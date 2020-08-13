function newYearChaos(inputArr) {
    //Time complexity = O(n)
    //Space complexity= O(n)

    let maxMovementScore = 0

    //will inverse loop 
    for (i = inputArr.length - 1; i >= 0; i--) {

        //check if number position changed or not 
        if (inputArr[i] != i + 1) {

            //Movement with one step 
            if ((i - 1 >= 0) && (inputArr[i - 1] == i + 1)) {
                maxMovementScore++
                swapArray(inputArr, i, i - 1)
            } else if ((i - 1 >= 0) && (inputArr[i - 2] == i + 1)) {
                //Movement with two step 
                maxMovementScore += 2
                swapArray(inputArr, i - 2, i - 1)
                swapArray(inputArr, i - 1, i)
            } else {
                //Movement with three step/chaotic
                console.log("Too chaotic")
                return
            }
        } else {
            console.log("No movement happened for >>", inputArr[i])
        }

        console.log(inputArr)


    }

    return maxMovementScore


}

function swapArray(arr, value1, value2) {
    let temp = arr[value1]
    arr[value1] = arr[value2]
    arr[value2] = temp

}




newYearChaos([2, 1, 5, 3, 4])