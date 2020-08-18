 
const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
   
};

const head = (list) => {
 return list[0];

}

assertEqual(head([8,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");