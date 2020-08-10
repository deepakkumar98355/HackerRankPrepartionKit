function countingValleys(n, inputString) {
    let altitude = 0,
        valley = 0

    for (let i = 0; i < inputString.length; i++) {

        if (inputString[i].toUpperCase() == 'U') {
            altitude++

            if (altitude == 0)
                valley++

        } else {
            altitude--
        }
    }
    return valley
}