function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
        var erorMessage = "The starting number will always be less than or equal to the ending number"
        return console.log(erorMessage);
    } else if (startN == endN) { return [startN] }
    else {

        const range = rangeOfNumbers(startN, endN - 1);
        range.push(endN);
        return range;
    }
}
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;