const add = (num1, num2) => {
  return num1 + num2;
};


const subtract = (num1, num2) => {
    return num1 - num2;
};

const sum = function(array) {
  // usage of reduce function
    const sumTotal = array.reduce((total, num) => {
      return total + num; 
    }, 0);
    return sumTotal;
 };


function multiply(array) {
  const sumTotal = array.reduce((total, num) => {
    return total * num; 
  });
  return sumTotal;
};
        
const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	// how to create the range of numbers for the factorial
    // const x = [];
    // for (i = 1; i <= num; i++ )
      // x.push[i];
      if (num === 0) {
        return 1;
      }
    const x = [];
      for(i = 1; i <= num; i++) {
        x.push(i);
      }
    const sumTotal = x.reduce((total, factorial) => {
      return total * factorial; 
      });

      return sumTotal;
    
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
