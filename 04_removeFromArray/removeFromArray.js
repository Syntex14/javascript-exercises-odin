// using Array.from() to create an array for argument[0], getArray
    // create a for loop that iterates through the arguments
        // ignore argument[0], start at ...argument[1],
        // create a conditional that intercepts -1 (false value) from indexOf that ignores/doesn't pass the value to splice.
    // using the newly created array, use indexof(argument[i]) to get the indexof the necessary elements in getArray. 
        // store in a variable, getIndexElement
    // using getIndexElement, use splice(var, 1) to remove the element.
    // return getArray
    
const removeFromArray = function() {
    const getArray = Array.from(arguments[0]);
    for(i = 1; i < arguments.length; i++) {
        let getIndexElement = getArray.indexOf(arguments[i]);
            if (getIndexElement === -1) { 
                continue;
            }
            else {
                getArray.splice(getIndexElement, 1);
            }
        
    }
    return getArray;

};
// Do not edit below this line
module.exports = removeFromArray;

// splice(index of the element (how do we find the index of the element?), how much will you take off (1) )
