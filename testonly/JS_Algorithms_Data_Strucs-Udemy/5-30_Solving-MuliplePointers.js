// Write a function called sumZero which accepts a sorted array of integers. The function shoudl find the first pair where teh sum is 0. REturn an array that includes both values that sum ot zero or undefined if a pair down not exist.


// NAIVE SOLUTION
function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

// REFACTORED SOLUTION
function sumZeroRector(arr) {
    // Set one pointer at 0 index
    let left = 0;
    // Set other pointer at end index
    let right = arr.length - 1;

    // Array is sorted, only run if left pointer less than right pointer
    while(left < right) {
        // Get sum of pointers
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            // If 0 return with array!
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            // If sum > 0 move right pointer
            right--;
        } else {
            // If sum < 0 move left pointer
            left++;
        }
    }
}