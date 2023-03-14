const repeatString = function(string, num) {
    const sumArray = [];
    if (Math.sign(num) === -1){
        return "ERROR";
    }
    for (let i = 0; i < num; ++i) {
        sumArray.push(string);
    }
    return sumArray.join("");

    // create a loop that iterate three times in a row
    // create an array that holds the string
    // Once loop is completed, join array together
    // return string of array.
};

// Do not edit below this line
module.exports = repeatString;
