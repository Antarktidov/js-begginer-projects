function numToString(numString) {
    let len = numString.length;
    console.log(len);
    return '0'.repeat(4-len) + numString;
}