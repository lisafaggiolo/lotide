 
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


const without = (array1, array2) => {
  
  const difference = array1.filter(x => !array2.includes(x));
  

  return difference;

}

assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
assertEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true); 