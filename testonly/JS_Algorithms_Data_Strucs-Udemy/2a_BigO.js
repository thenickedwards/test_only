// WRITE A FUNCTION THAT ACCEPTS A STRING INPUT AND RETURNS A REVERSE COPY
let stringOne = "JavaScript"
let stringTwo = "Sounders"
let stringThree = "Can you do a sentence?"

function reverseString(string){
    return string.split("").reverse().join("");
}

reverseString(stringOne);
reverseString(stringTwo);
reverseString(stringThree);

function reverse(str) {
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--)
    revStr += str[i];
    return revStr;
}

// COUNT UP TO A NUMBER
function sumUpTo(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total
}
// OPERATIONS: 2 assignments, n comparisons, n additions & assignments, n assignments, n comparisons = 5n + 2 operations

function addUpTo(n) {
    return n * (n + 1) / 2;
}
// OPERATIONS: 1 multiplication, 2 addition, 3 division
