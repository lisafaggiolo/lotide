const assertEqual = require("../assertEqual");

const assert = require('chai').assert;


describe("#assertEqual", () => {
  
  it("returns true for (1, 1)", () => {

    assert.strictEqual(assertEqual((1, 1), 1));
  });
  
  it("returns true for ('Lighthouse Labs', 'Lighthouse Labs')", () => {
    
    assert.strictEqual(assertEqual(('Lighthouse Labs', 'Lighthouse Labs'), 'Lighthouse Labs'));
  })

});