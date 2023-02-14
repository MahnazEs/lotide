/* const assertEqual = require('../assertEqual');
const tail = require('../tail');



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); */





const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

  /* it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);
    }); */

});