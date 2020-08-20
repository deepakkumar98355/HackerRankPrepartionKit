/* 
    Geometric progression a, ar, ar^2, ar^3,.....
*/

function countTriplets(arr, r) {

    let tripletCount = 0


    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] * r == arr[j]) {
                for (let k = j + 1; k <= arr.length - 1; k++) {
                    if (arr[j] * r == arr[k])
                        tripletCount++

                }
            }
        }
    }

    return tripletCount

}

// bruteForceCountTriplets([1, 3, 9, 9, 27, 81], 3)


function OptimizedCountTriplets(arr, ratio) {
    let totalCount = 0
    const possibilities = {}
    const combos = {}

    for (let item of arr) {
        totalCount += (combos[item] || 0)

        const nextNumber = item * ratio

        combos[nextNumber] = ((combos[nextNumber] || 0) + (possibilities[item] || 0))

        possibilities[nextNumber] = (possibilities[nextNumber] || 0) + 1
    }

    return totalCount
}


OptimizedCountTriplets([1, 3, 9, 9, 27, 81], 3)