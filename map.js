

const words = ["ground", "control", "to", "major", "tom"];

 
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



const map = (array, callback) => {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

/*const results1 = map(words, word => word[1]);
const results2 = map(words, word => word[1]);
assertEqual(eqArrays(results1, results2), true);*/

module.exports = map;