const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {

  /* Using for... of method */
	// let sumArray = 0;
  // for (const item of array) {
  //   sum += item;
  // }
  // return sumArray;

  //Useing forEach method
  let sumArray = 0;

  array.forEach(element => {
    sumArray += element;
  });
  return sumArray;
};

const multiply = function(array) {
  let multArray = 1;

  array.forEach(item => {
    multArray *= item;
  });
  return multArray;
};

const power = function(a, b) {
	let total = a**b;
  return total;
};

const factorial = function(number) {
/* For loop method */
	if(number === 0 || number === 1) {
    return 1;
  } 
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number
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
