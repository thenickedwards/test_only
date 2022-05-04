// Write a function called *same* which accpts two arrays. The fucntioon should return ture if every value in teh array has it's corresponding value squared in teh second array. Thefrequency of values must be the same.

// NAIVE APPROACH
function sameNaive(arr1, arr2) {
    // Verify arrays same length
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // Set squared value as variable, check arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // -1 indicates not present, return false
        if (correctIndex === -1) {
            return false;
        }
        // Remove value from array and reloop
        arr2.splice(correctIndex,1)
    }
    return true;
}

