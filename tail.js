const assertEqual = require('./assertEqual')

const tail = list => {
  return list.slice(1);
}


module.exports = tail;