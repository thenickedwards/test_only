// Given two strings, write a function to determine if the second string is an anagram of the first.

function validAnagram(str1, str2) {
    // Verify arrays same length
    if (str1.length !== str2.length) {
        return false;
    }
    
    const lookup = {};

    // Create object out of first string
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment count of frequency of letter, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // if can't find letter (or letter is zero bc zero is "falsey") then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            // decrement value in str1 when found in str2, should eventually be all zeroes
            lookup[letter] -= 1;
        }
    }
    return true;
}

