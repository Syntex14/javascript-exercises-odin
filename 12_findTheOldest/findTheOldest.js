const findTheOldest = function(array) {
    const oldestObject = array.reduce((acc, val) => {
        acc[val.name] = val.yearOfDeath - val.yearOfBirth;
        return acc;
    }, {});
    return Math.max(oldestObject[])
};



// Do not edit below this line
module.exports = findTheOldest;
