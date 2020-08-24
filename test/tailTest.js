const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3)



const assert = require('chai').assert;


describe("#tail", () => {
  
  it("returns true for (['Yo Yo', 'Lighthouse', 'Labs'])", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it

    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  
  it("returns true for ([1, 2, 3])", () => {
    const words = [1 ,2 ,3];
    tail(words); // no need to capture the return value since we are not checking it

    assert.deepEqual(tail(words), [2, 3]);
  }); 

});