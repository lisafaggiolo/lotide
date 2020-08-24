const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArraysEqual([middle([1, 2, 3]), [2]], true);
assertArraysEqual([middle([1, 2, 3, 4]), [2, 3]], true);

const assert = require('chai').assert;


describe("#middle", () => {
  
  it("returns true for ([1, 2, 3])", () => {
    //const words = ["Yo Yo", "Lighthouse", "Labs"];
    //tail(words); // no need to capture the return value since we are not checking it

    assert.strictEqual(assertArraysEqual([middle([1, 2, 3]), [2]], true));
  });
  
  it("returns true for ([1, 2, 3, 4])", () => {
    //const words = [1 ,2 ,3];
    //tail(words); // no need to capture the return value since we are not checking it

    assert.strictEqual(assertArraysEqual([middle([1, 2, 3, 4]), [2, 3]], true));
  }); 

});