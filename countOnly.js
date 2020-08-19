const assertEqual = (actual, expected) => {
  const errorMsg = `🤕 Assertion Failed: ${actual} !== ${expected}`;
  const passMsg = `😀 Assertion Passed: ${actual} === ${expected}`;
  
  if (actual === expected) {
    console.log(passMsg);
  } else {
    console.log(errorMsg);
  }
   
};



const countOnly = (allItems, itemsToCount) => {

  const results = {};
  
  for (const item of allItems){
    if(results[item] === undefined){
      results[item] = 1;
    } else {
      results[item]++
    }
    
  }
  console.log(results);
  return results;

  
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);