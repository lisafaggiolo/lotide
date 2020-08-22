const { timingSafeEqual } = require('crypto');

 
const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  
  const errorMsg = `🤕 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passMsg = `😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  
  let result = eqObjects(actual, expected) 

  if (result) {
    console.log(passMsg)
  } else {
    console.log(errorMsg)
  }
};



const eqObjects = (object1, object2) => {

  let result = true 
  //figure out both object's length
  const objLength1 = Object.keys(object1).length  
  const objLength2 = Object.keys(object2).length
  
  //find out if length of both objects are the same
  if (objLength2 !== objLength1){
    result = false;
  } 

  
  for (let elem in object1){
    //find out if objects are arrays
    if (object1[elem] !== object2[elem]){
      //if object 
      result = false
      
    }
  }

  return result;
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectEqual(ab, abc);
