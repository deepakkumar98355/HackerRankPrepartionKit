function arrayManipulationBruteForce(n,queries){
    //initialize empty array 
    // Iterations 
    /* 
        [0, 0, 0, 0, 0] - initial array 

        [1, 2, 100] will push from 1 to 2 100 i.e [100, 100, 0, 0 ,0] 
        [2, 5, 100] will push from 2 to 5 100 i.e [100, 200, 100, 100, 100]
        [3, 4, 100] will push from 1 to 2 100 i.e [100, 200, 200, 200, 100]

        sort and get max value i.e 200
    */


    let manipulationArray = []

    for(let i=0;i<n;i++){
        manipulationArray.push(0)
    }

    for(let query of queries){
        let startIndex = query[0]-1
        let endIndex = query[1]-1
        let addElement = query[2]

        for(let i=startIndex ;i<=endIndex;i++){
            manipulationArray[i] += addElement
        }
    }

    manipulationArray.sort(compare)

    return manipulationArray[0]
}

function compare(a,b){
    return b-a
}

/* arrayManipulationBruteForce(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]) */


/* arrayManipulationOptimal(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
]) */




/* 
    Good To Know : Prefix Sum Algorithm 
    Whenever we need a range sum 
    Given array : [1, 2, 3, 4, 6, 9] we need sum from index(0 to 4) i.e 16 
    Can be calculated by pre calculated prefix sum array 
    Implementation given below 
*/

function getPrefixSum(arr,range,isContinuous=true){
    /*  
        Time Complexity = O(n)
        Calculation of prefix array 
        0    1     2    3     4     5  // index 
        
        [1,  2,    3,   4,    6,    9] // original array 

        [1, 2+1, 3+3, 6+4, 10+6, 16+9]
        
        [1,  3,    6,  10,    16,  25]  //prefix Array 

        range Sum Time Complexity = O(1)

        arr[0 to 4] = a[4] = 10 

        arr[2 to 5] = ?

        sum b / w range(0 - 5) = sum b / w range(0 - 1) + sum b / w range(2 - 5)

        sum b / w range(2 - 5) = sum b / w range(0 - 5) - sum b / w range(0 - 1)
                               = 25 - 3 = 22  

        Key Takeaway :
            -- Range Sum Formula = A[i,j] = A[j] - A[i-1]
            -- It takes O(n) time to calculate prefix sum array 
            -- It takes O(1) time to calculate range sum query on n size array


    */

    // calculating prefix array 

    // Space complexity : O(n)

    for(let i=1;i<arr.length;i++){
        arr[i] = arr[i] + arr[i - 1]
    }

    console.log(arr)

    // Range Sum calculation
    // Time complexity : O(1)
    
    let rangeSum =0 

    if(isContinuous)
    rangeSum = arr[range[1]]
    else
    rangeSum = arr[range[1]] - arr[range[0]-1]

    return rangeSum
}


// getPrefixSum([1, 2, 3, 4, 6, 9],[3,4],false)



function arrayManipulationOptimal(n, queries){
    let outputArray = Array(n+2).fill(0)


    console.log(outputArray)

    for(let query of queries){
        outputArray[query[0]] += query[2] // adding number at start 
        outputArray[query[1] + 1] -= query[2] // adding at b+1 to stop at specific position

        console.log(outputArray)
    }

    console.log(outputArray)

    let sum = 0
    let maxSum = 0 

    // taking the array sum and extracting max sum out of that 
    for (let i = 0; i < outputArray.length;i++){
        sum += outputArray[i]
        maxSum = Math.max(sum,maxSum)
    }

    return maxSum

}




arrayManipulationOptimal(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
])




