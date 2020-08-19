//TEST/ASSERT FUNCTIONS
const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
   
};


const assertArraysEqual = (actual, expected) => {
 
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







let middle = (array) => {

  let midArray = [];

  if (array.length <= 2) {
    //For arrays with one or two elements, there is no middle. Return an empty array.
    return midArray;

  } else if (array.length % 2 === 1) {
    //For arrays with odd number of elements, an array containing a single middle element should be returned.
    midArray.push(array[Math.floor(array.length / 2)]);
   

  } else if (array.length % 2 === 0) {
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    let firstI = array.length / 2 - 1; //determines the first middle of the list
    let secondI = array.length / 2;  //determines the second middle of the list

    midArray.push((array[firstI]));
    midArray.push((array[secondI]));
  }

  return midArray;
};










assertEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true); // => should PASS

console.log(middle([1])); // => []
console.log(middle(([1, 2]))); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
