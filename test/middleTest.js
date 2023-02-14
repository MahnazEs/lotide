
/* const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');



const middleOfArray = middle([1, 2, 3, 4, 5]);
assertArraysEqual(middleOfArray,[3]); */





const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), undefined);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});