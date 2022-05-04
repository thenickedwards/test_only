// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted.

function countUniqueValues(arr) {
    // Start with comparing zero
    var i = 0;
    for (let j = 1; j < arr.length; j++) {
        // if value not equal
        if (arr[i] !== arr[j]) {
            // increment i index
            i++;
            // convert value at i index = to value at j index
            // note: modifies array
            arr[i] = arr[j]
        }
        console.log(i,j);
    }
    // Return index of last match plus 1
    return i + 1;
}