 
const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
   
};



const assertArraysEqua = (actual, expected) => {
 
  // if length is not equal
  if (actual.length !== expected.length) {
    return false;
  } else {
  // comparing each element of array
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        return true;
      
      } else {
        return false;
      }
    }
  }
};


assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS