

function sumFibonacci(num) {
    if (num < 1) {
        return 0;
    }
    else {

        var fib = function (num) {
            if (num === 1) {
                return [0, 1];
            }
            else {
                var s = fib(num - 1);

                s.push(s[s.length - 1] + s[s.length - 2]);
                return s;
            };
        };

        if (fib[num] % 2 === 1) {

            return fib[num] + sumFibonacci(num - 1);
        }
        
        return sumFibonacci(num - 1);
    }





}

console.log(sumFibonacci(5));
module.exports = sumFibonacci;