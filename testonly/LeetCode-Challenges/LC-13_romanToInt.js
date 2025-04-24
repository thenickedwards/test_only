// LEETCODE 13. Roman to Integer

var romanToInt = function(string) {
    // Declare result value with initial value of 0
    let result = 0;
    console.log("initial: ", string)

    // Check if smaller number precedes larger
    let fours = string.includes("IV");
    let nines = string.includes("IX");
    let forties = string.includes("XL");
    let nineties = string.includes("XC");
    let fourHundreds = string.includes("CD");
    let nineHundreds = string.includes("CM");

    if (fours) {
        result = result + 4
        string.replace(fours,"")
    }

    if (nines) {
        result = result + 9
    }

    // Sum those and remove from string
    // Sum remainder of string
    // Return result
    console.log(result);
    console.log("second: ", string)
};

let testString0 = "IV"
let testString1 = "III"
let testString2 = "LVIII"
let testString3 = "MCMXCIV"

// romanToInt(testString1);
// romanToInt(testString2);
// romanToInt(testString3);
romanToInt(testString0);