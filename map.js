

const words = ["ground", "control", "to", "major", "tom"];

 
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
 
  // if length is not equal 
  if (array1.length!== array2.length){ 
    return false; 
  } else { 
  // comparing each element of array 
    for (let i = 0; i < array1.length; i++) { 
      if(array1[i] === array2[i]){ 
        return true;  
      
      } else {
        return false;
      } 
    }
  }
}



const map = (array, callback) => {
  
  const results = [];
  for (let item of array){
    results.push(callback(item));
  } 

  return results
};

const results1 = map(words, word => word[1]);
const results2 = map(words, word => word[1])
assertEqual(eqArrays(results1, results2), true);