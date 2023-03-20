const leapYears = function(year) {

    // Formally re-state this problem
     // Limitations:
        // Years divisible by 100 are not leap years
        // Years divisible by 4 are leap years.
        // Years divisble by 400 are leap years.
            // Given this: 100 cannot be included, yet 400 can be. 
            // Additionally, years not divisible by 4 are not leap years.
     // Operations:
        // Divide the year by four and if equal to a leap year, return true
            // If not, return false
        // Divide the year by four and if eual to a leap year ending in 00, run a second conditional
            // Divide the year by 400 and if a remainder exists, return false.
                // If not, return true
    // Pesudo-Code
        // Take the arg, and use moduelo by 4. 
            // IF not equal to zero, return false.
                // IF equal to zero, use moduelo by 100.
                    // IF equal to zero, return false (100 year century)
                        // IF not equal to zero, return true, (random leap year)
    
    if (year % 4 !== 0) {
        return false;
        }
    if ((year % 4) === 0 && (year % 100) > 0) {
        return true;
    }  
     if ((year % 4) === 0 && (year % 400) === 0)  { // handles 400 leap year
        return true;
    }
    else {
        return false; // handles 100 year century
    }
};

// Do not edit below this line
module.exports = leapYears;
