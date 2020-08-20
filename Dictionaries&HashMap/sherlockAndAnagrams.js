/* 
    Anagram check list :
        1. Length(S1) == Length(S2)
        2. Freq of Char(S1) == Freq of Char(S2)

*/


function sherlockAndAnagrams(s) {
    const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length

    if (!duplicatesCount) return 0
    let anagramsCount = 0

    const arr = getAllSubstrings(s)

    for (let i = 0; i < arr.length; i++) {
        anagramsCount += countAnagrams(i, arr)
    }

    return anagramsCount
}

function getAllSubstrings(str) {
    let i, j, result = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j))
        }
    }
    return result
}

function countAnagrams(currentIndex, arr) {
    const currentElement = arr[currentIndex]
    const arrRest = arr.slice(currentIndex + 1)
    let counter = 0

    for (let i = 0; i < arrRest.length; i++) {
        if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
            counter++
        }
    }

    return counter
}

function isAnagram(str1, str2) {
    const hist = {}

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i]
        if (hist[char]) {
            hist[char]++
        } else {
            hist[char] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        const char = str2[j]
        if (hist[char]) {
            hist[char]--
        } else {
            return false
        }
    }

    return true
}


sherlockAndAnagrams("mom")