 
const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual');



const eqObjects = (object1, object2) => {
  let result = true;
  //figure out both object's length
  const objLength1 = Object.keys(object1).length;
  const objLength2 = Object.keys(object2).length;
  
  //find out if length of both objects are the same
  if (objLength2 !== objLength1) {
    result = false;
  }

  
  for (let elem in object1) {
    //find out if objects are arrays
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
      result = eqArrays(object1[elem], object2[elem]);
      
    } else if (object1[elem] !== object2[elem]) {
      //if object
      result = false;
      
    }
  }

  return result;
};
  


module.exports = eqObjects;