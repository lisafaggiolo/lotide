
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

