 
const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
}





const countLetters = (string) => {
  const objLetterCount = {};
  
  //must divide the string in an array
  const sentence1 = string.replace(/\s+/g, '');
  const letters = sentence1.split('');
  
  // console.log(letters);
  
  
  for (let letter of letters){
    if (objLetterCount[letter] === undefined) {
      objLetterCount[letter] = 1;

    } else {
      objLetterCount[letter]++;
    
    }
  }
  
  return objLetterCount;

}

const result1 = console.log(countLetters('LHL'));
console.log(result1); //should return results indicating that L appears twice, and H once.

assertEqual(result1["H"], 1); //true