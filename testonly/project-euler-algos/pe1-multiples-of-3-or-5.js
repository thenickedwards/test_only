// Multiples of 3 or 5
// Show HTML problem content 
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function getSumof3s5s(num) {
    let total = 0;
    for (let i = num; i > 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i
            console.log(total);
        }
    }
}

getSumof3s5s(999);
