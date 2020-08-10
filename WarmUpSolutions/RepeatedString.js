function repeatedString(s, n) {
    let count_1 = (s.match(/a/g) || []).length; // will match all get count of "a" in inputString("aba")
    let count_2 = Math.floor(n / s.length); //will get quotient

    let count = count_1 * count_2;
    //calculating remainder part
    let remainder = n % s.length;
    //will substring and match if "a" then will get length and add to result
    let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length;

    return count + remainderCount;
}