// SOLVE/SIMPLIFY
// Write a function which takes a string and returns counts of each character in the string

var testString1 = "Hello"
var testString2 = "Go Sounders!"
var testString3 = "Testing String 3"

function characterCount(string) {
    // make an object to return at end
    let finalTallies = {};
    // loop over string
    for (let i = 0; i < string.length; i++) {
        // if char is NOT alphanumeric, don't do anything???
        // if char is alphanumeric and key in object
        let character = string[i].toLowerCase();
        if (finalTallies[character] > 0) {
            finalTallies[character]++;
        // if char is alhanumeric and NOT key in object
        } else {
            // add char to object and set value to 1
            finalTallies[character] = 1;
        }
    }
    // console.log(finalTallies);
    return finalTallies
}

// Why doesn't this work??? 😭

// REVISED
function charCount(str) {
    var obj = {};
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;1
            };
        }
    }
    // console.log(obj);
    return obj;
}

// REFACOTRED
function charCounter(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    // console.log(obj)
    return obj;
}
