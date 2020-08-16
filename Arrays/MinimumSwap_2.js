function minimumSwapsBruteForce(arr) {
    /* 
        Brute Force Sort 
        Compare each index number with the next i+1 
        if number is bigger swap and increment 
        Run one more inner for loop before exiting outer for loop 
        to check if the arr[] is sorted or not 
        If not sorted will sort again keep one innerCount and re-initializing i=0
        if reaches inner for-loop again if increment done will break loop
        
        Time Complexity : O(n*n) || O(n!) 
    */
    let swapCount = 0

    for (let i = 0; i < arr.length+1; i++) {
        if (arr[i] > arr[i + 1]) {
            swapCount++
            swapArray(arr, i, i + 1)
        }
        // console.log(arr)

        if(i==arr.length){
            let innerCount = 0

            for(let j=0;j<arr.length;j++){
                if (arr[j] > arr[j + 1]) {
                    swapCount++
                    innerCount++
                    i=0
                    swapArray(arr, j, j + 1)
                }
            }

            if(innerCount==0)
            break

        }
    }
    console.log("final array >>", arr," with swap count ",swapCount)
    return swapCount

}

function swapArray(inputArr, value1, value2) {
    console.log("swap b/w",inputArr[value1],inputArr[value2])
    let temp = inputArr[value1]
    inputArr[value1] = inputArr[value2]
    inputArr[value2] = temp

}

/* minimumSwapsBruteForce([4, 3, 1, 2])
minimumSwapsBruteForce([1,3,5,2,4,6,7]) */


/* 
    O(n^2) Solution To Find Minimum Swap required in an given Array 
    Will fail for 10^5 test cases 
    1 <= n <= 10^5 
*/

function o2MinimumSwap(arr) {
    let swap = 0 

    for(let i=0 ;i<arr.length;i++){
        if(arr[i]!=i+1){
            let t=i
            while (arr[t] != i + 1) {
                t++
            }
            swapArray(arr,t,i)
            swap++
        }


    }

    return swap
}

// o2MinimumSwap([4, 3, 1, 2])
// o2MinimumSwap([1, 3, 5, 2, 4, 6, 7])



/* 
    ** ** ** ** ** ** Optimal Solution ** ** ** ** ** **
*/

function optimalSolution(arr){
    let totalSwapCount = 0

    // arr = [4, 3, 1, 2]
    /* 
        Time Complexity = O(n)
        Worst case = O(2n) as constants are dropped thus O(n)
    */

    for(let i=0;i<arr.length;i++){
        totalSwapCount += getArraySwapCount(arr,i) //arr,0
    }

    return totalSwapCount
}

function getArraySwapCount(arr,index){
    /* 
        Taking initial array and starting with first index 
        arr = [4, 3, 1, 2] , now will use arr[0] i.e 4 
        as the index starts from 0 will check what sits at 4 index i.e arr[4-1] i.e 2 
        So current value = 4 will swap with target value = 2 
        After Swap arr= [2, 3, 1, 4] now current = target i.e current = 2 and what sits at 2 index i.e arr[2-1] i.e 3
        So will swap current value = 2 with target = 3 
        arr = [3, 2, 1, 4] current = 3 , target = 1 
        arr = [1, 2, 3, 4] current = 1 , target = arr[0] i.e 1 
        current=target will return sum 
    */
    let swapCount = 0 

    let current = arr[index] 
    let target = arr[current-1] 

    while(current!=target){  
        arr[index] = target  
        arr[current-1]=current 

        swapCount++ 

        current=target 
        target=arr[current-1] 
    }
    console.log("After iteration ",index, " will have this array as ",arr ," with swap count ",swapCount)
    return swapCount


}

optimalSolution([4, 3, 1, 2])
// optimalSolution([1, 3, 5, 2, 4, 6, 7])