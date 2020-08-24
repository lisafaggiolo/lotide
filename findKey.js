
const assertEqual = require('./assertEqual'); 


const findKey = (starsObj, callback) => {

  for (let x in starsObj) {
    if (callback(starsObj[x])) {
      return x;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

module.exports = findKey;