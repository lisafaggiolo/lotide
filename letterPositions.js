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





const letterPositions = (sentence) => {
  const results = {};
  
  //remove space in string and makes it in an array of lower cased seperate letters
  let sentenceMod = sentence.replace(/\s+/g, '');
  sentenceMod = sentenceMod.toLowerCase();
  const letters = sentenceMod.split('');

  //console.log(letters);
  //loop to iterate over elements of my array
  for (let letter of letters) {
    //determine which letters are present
    if (letters[letter] === undefined) {
      results[letter] = [];
    
    }
  }
  //loop to iterate over letters and push
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i]) {
      results[letters[i]].push(i);
    }
  }
  console.log(results);
  //loop to add the indexes to their respective letters
  console.log(results);
  return results;
};


const result1 = letterPositions('Hello');
assertEqual(assertArraysEqual(result1.e, [1]), true);