
const eqArrays = function (arr1, arr2) {
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
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 ${array1} !== ${array2}`);
  }
};


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    /* console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---'); */
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//console.log("result: ", results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);