 
const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  
  const result = eqArrays(actual[0], actual[1]);
  
  const errorMsg = `🤕 Assertion Failed: ${result} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${result} === ${expected}`;

  if (result === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }

   
};



module.exports = assertArraysEqual;