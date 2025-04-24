// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    return result

    // GREPPER SOLUTION
    // if (num < 0) return;
    // if (num < 2) return 1;
    // return num * factorial(num - 1);
};
