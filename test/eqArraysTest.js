const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


const assert = require('chai').assert;


describe("#eqArrays", () => {
  
  it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
  
  it("returns true for ([1, 2, 3, '4'], [1, 2, 3, '4'])", () => {
    
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3,'4'], [1, 2, 3, '4']), true));
  })

});