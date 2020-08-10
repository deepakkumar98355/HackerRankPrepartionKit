function testing(c) {

    let steps = 0

    for (let i = 0; i < c.length - 1;) {
        if (c[i + 2] != 1) {
            steps++
            i += 2
        } else {
            steps++
            i++
        }
    }
    return steps
}

testing([0, 0, 1, 0, 0, 1, 0])