const assertEqual = require('./assertEqual');



const eqArrays = (array1, array2) => {
 
  let result = true;
  // if length is not equal
  if (array1.length !== array2.length) {
    result = false;
  } else {
    // comparing each element of array
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  }

  return result;
};


module.exports = eqArrays;
