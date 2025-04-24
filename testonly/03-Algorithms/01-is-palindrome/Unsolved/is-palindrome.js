// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let revStr = str.split("").reverse().join("");
    if (revStr === str) {
        console.log(true);
        return true;
    } 
        console.log(false);
        return false;
};



///////////

// KIM'S PRE-CLASS DRILL

// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

const findAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("sum", sum);
    let avg = sum / arr.length
    console.log("avg", avg);
};

let arr1 = [ 1 , 4 , 7 ];
let arr2 = [ 10, 5 ];
let arr3 = [ 1.5, 3, 2.5, 1 ]

findAverage(arr1);
findAverage(arr2);
findAverage(arr3);
