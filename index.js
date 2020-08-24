
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

  head:              head,
  tail:              tail,
  middle:            middle,
  assertObjectEqual: assertObjectEqual,
  assertEqual:       assertEqual,
  assertArraysEqual: assertArraysEqual,
  countLetters :     countLetters,
  countOnly:         countOnly,
  eqArrays:          eqArrays,
  eqObjects:         eqObjects,
  findKey:           findKey,
  findKeyByValue:    findKeyByvalue,
  letterPositions:   letterPositions,
  map:               map,
  takeUntil:         takeUntil,
  without:           without
}