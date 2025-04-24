// Largest prime factor
// Submit

//  Show HTML problem content 
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function getLargestPrimeFactor(num) {
    for (let i = num-1; i >= 2; i--) {
        if (num % i === 0) {
            console.log(`${i} is factor of ${num}... but is it prime?`)
            for (let j = 2; j <= i-1; j++) {
                if (i % j === 0) {
                    console.log(`${j} is a factor of ${i}, so ${i} isn't prime.`)
                    break
                } else {
                    console.log(`${i} is a factor of ${num} and prime!`)
                    return
                }
            }
        }
    }
}

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }

// function getLargestPrimeFactor2(number) {
//     if (isPrime(num)) {

//     }
// }

// getLargestPrimeFactor(20);
// getLargestPrimeFactor(33);
// getLargestPrimeFactor(600851475143);

function largestPrimeFactor(n){
    var i=2;
    while (i<=n){
        if (n%i == 0){
            n/=i;    
        }else{
            i++;
        }
    }
    console.log(i);
}

largestPrimeFactor(20);
largestPrimeFactor(33);
largestPrimeFactor(600851475143);