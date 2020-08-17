function twoStrings(s1, s2) {
    /* 
        Space complexity = O(1) i.e O(26 letters of [A-Z])
        Time Complexity = O(s1.length + s2.length) = O(s1+s2)
    */

    const letters = {}

    for (let letter of s1) {
        letters[letter] = true
    }

    for (letter of s2) {
        if (letters[letter])
            return 'YES'

    }

    return 'NO'
}


twoStrings(['hello', 'world'])