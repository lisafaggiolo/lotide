 
const assertEqual = require('./assertEqual');


const eqArrays = require('./eqArrays');


const without = (array1, array2) => {
  
  const difference = array1.filter(x => !array2.includes(x));
  

  return difference;

};

//assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
//assertEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true);

module.exports = without;