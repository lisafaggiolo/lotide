
const head              = require('./head');
const tail              = require('./tail');
const middle            = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual       = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters      = require('./countLetters');
const countOnly         = require('./countOnly');
const eqArrays          = require('./eqArrays');
const eqObjects         = require("./eqObjects");
const findKey           = require('./findKey');
const findKeyByvalue    = require('./findKeyByValue');
const letterPositions   = require('./letterPositions')
const map               = require('./map');
const takeUntil         = require('./takeUntil');
const without           = require('./without');


module.exports = {

  head,
  tail,
  middle,
  assertObjectEqual,
  assertEqual,
  assertArraysEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByvalue,
  letterPositions,
  map,
  takeUntil,
  without
}; 
