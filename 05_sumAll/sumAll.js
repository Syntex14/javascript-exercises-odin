// function parameters: int1, int2
// create a conditional that check if the numbers given are positive/integer type
// create a variable that starts at zero, initialSum
// use math.max & math.min to find the largest and smallest int.
// create a for loop, initializes at intMin, stays within the range, ends at intMax and iterates once the addition is complete.
    // in each loop using the initialSum variable, add (1*i) to the variable
// Once loop is complete, return initialSum


const sumAll = function(int1, int2) {
    if (Number.isInteger(int1)  === false || Math.sign(int1) === -1) { // conditional check, can definitely be smaller. loops, ternary operator?
        return "ERROR";
        }
    else if (Number.isInteger(int2)  === false || Math.sign(int2) === -1) {
        return "ERROR";
        }

    let intMax = Math.max(int1, int2); // using math max/min allows us flexiability when determining the range of the loop
    let intMin = Math.min(int1, int2);
    let initialSum = 0;
        for (i = intMin; i <= intMax; ++i) { 
         initialSum += (1 * i);
        } 
    return initialSum;
};

// Do not edit below this line
module.exports = sumAll;
