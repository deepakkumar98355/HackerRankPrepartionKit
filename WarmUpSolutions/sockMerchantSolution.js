function sockMerchant(n, ar) {
    let count = 0

    ar.sort()
    // 10 10 10 10 20 20 20 30 50 sort and then if true increment and i+2
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            i++
            count++
        }
    }

    return count
}