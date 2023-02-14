
const eqArrays = require('./eqArrays');

/* const eqArrays = function (arr1, arr2) {
  let lenArr1 = arr1.length;
  let lenArr2 = arr1.length;
  let result = true;
  if (lenArr1 > 0 && lenArr2 > 0) {
    if (lenArr1 === lenArr2) {
      for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] === arr2[i])) {
          result = false;
        }
      }
      return result;
    }
    return false;
  }
  console.log("please enter data in Array!");
}; */

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 ${array1} !== ${array2}`);
  }
};



//assertArraysEqual([3, 2, 1], [3, 2, 1]);

module.exports = assertArraysEqual;


