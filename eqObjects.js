 
const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
   
};

const eqArrays = (array1, array2) => {
  let result = true;
  // if length is not equal 
  if (array1.length !== array2.length){ 
    result = false; 
  } else { 
    // comparing each element of array 
  for (let i = 0; i < array1.length; i++) { 
    if(array1[i] !== array2[i]){ 
      result = false;
      }  
    }
  }

  return result;
}


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
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])){
      result = eqArrays(object1[elem], object2[elem]);
      
    } else if (object1[elem] !== object2[elem]){
      //if object 
      result = false
      
    }
  }

  return result;
}
  

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
