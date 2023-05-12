const getTheTitles = function(arrayObjs) {
    let key = "title";
    const resultArray = [];
    for (i = 0; i < arrayObjs.length; i++) {
        resultArray.push(arrayObjs[i][key]);
           
    }   
    return resultArray;

};

// Do not edit below this line
module.exports = getTheTitles;

// key = "title";

// reference the array index you are attempting to get
    // reference the key or key value
        // arrayObjs[0]