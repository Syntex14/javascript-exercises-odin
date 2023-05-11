const fibonacci = function(num) {
    //
    // n2 = 1
    // array = [1]
    // for (i = 0; i < num; i++) 
    // n1 = array[0]
    // n2 += n1;
    if (Math.sign(num) === -1 ) {
        return "OOPS";
    }
    
    const array = [0, 1];
    for (i = 0; i < num; i++) {
    let numberPredicingOne = array[i];
    let numberPredicingTwo = array[i+1];
       array.push(numberPredicingTwo += numberPredicingOne);

    }
    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;
