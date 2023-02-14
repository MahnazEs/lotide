
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');





const middleOfArray = middle([1, 2, 3, 4, 5]);
assertArraysEqual(middleOfArray,[3]);