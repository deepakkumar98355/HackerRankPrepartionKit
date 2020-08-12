function rotLeft(a, d) {
    return a.slice(d, a.length).concat(a.slice(0, d))
}

let res = rotLeft([1, 2, 3, 4, 5], 2)

console.log(res)