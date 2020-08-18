 
const assertEqual = (actual, expected) => {
  const errorMsg = '🤕 Assertion Failed: ' + actual + ' !== ' + expected;
  const passMsg = '😀 Assertion Passed: ' + actual + ' === ' + expected;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }

   
    
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);