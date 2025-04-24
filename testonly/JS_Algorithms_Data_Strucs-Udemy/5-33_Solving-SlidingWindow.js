// Write a function called maxSubaraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.


// NAIVE SOLUTION
function maxSubaraySumNaive(arr, num) {
    // If digits to sum greater than array length, return null
    if ( num > arr.length) {
        return null;
    }
    // Set max as negative infinity
    var max = -Infinity;

    // For loop with limit to not include partial sums
    for (let i = 0; i < arr.length - num +1; i++) {
        // Temp to store sum we'll test
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            // Update max if temp is greater
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}

// REFACTORED SOLUTION
function maxSubaraySumRector(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    // If digits to sum greater than array length, return null
    if (arr.length < num) return null;

    // Sum first valid set to initial maxSum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // Set first maxSum as tempSum for testing
    tempSum = maxSum;

    for (let i =num; i < arr.length; i++) {
        // Subtract first value in set and add last value for next set
        tempSum = tempSum - arr[i - num] + arr[i];
        // If greater, set to maxSum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}