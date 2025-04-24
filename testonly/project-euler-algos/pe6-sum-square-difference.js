// Sum square difference
// Submit

//  Show HTML problem content 
// Problem 6
// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSquareDifference(num) {
    let sumOfSquares = 0;
    for (let i = 1; i <= num; i++) {
        sumOfSquares += i * i;
    }
    console.log(sumOfSquares);
    
    let sum = 0;
    for (let j = 1; j <= num; j++) {
        sum += j;
    }
    let squareOfSum = sum * sum;
    console.log(squareOfSum);

    let difference = squareOfSum - sumOfSquares;
    console.log(difference);
}

sumSquareDifference(10);
sumSquareDifference(100);