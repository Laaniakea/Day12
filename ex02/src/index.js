function myCounter(n) {

    if (n < 1) {
        return [];
    } else {
        const countBack = myCounter(n - 1);
        countBack.unshift(n);
        return countBack;
    }
}
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;