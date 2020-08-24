
const { timingSafeEqual } = require('crypto');
const eqObjects = require('./eqObjects');

 
const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  
  const errorMsg = `🤕 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passMsg = `😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  
  let result = eqObjects(actual, expected);

  if (result) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
};





module.exports = assertObjectEqual;

