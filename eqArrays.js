 
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS