// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.


// NAIVE SOLUTION
function searchNaive(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}


// REFACTORED SOLUTION
function searchRefactor(array, val) {

    // Get min and max indices of array
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        // While min is less than max, find middle index
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle]

        // If mid less than value, set new min one index up
        if (array[middle] < val) {
            min = middle + 1;
        }
        // If max greater than value, set new max one index down
        else if (array[middle] > val) {
             max = middle -1;
        }
        // If equal, return index
        else {
            return middle;
        }

    }
    return -1
}