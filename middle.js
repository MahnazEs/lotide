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


/* const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 ${array1} !== ${array2}`);
  }
}; */





const middle = function (mArray) {
  let newList = [];
  let midIndex = 0;
  if (mArray.length < 1) {
    return console.log("please enter data!");
  }
  if (mArray.length < 3) {
    return newList;
  }

  if (mArray.length % 2 === 0) {
    midIndex += mArray[Math.round(mArray.length / 2) - 1];
    newList.push(mArray[midIndex - 1]);
    newList.push(mArray[midIndex]);
    return newList;
  } else {
    midIndex += mArray[Math.round(mArray.length / 2) - 1];
    newList.push(mArray[midIndex - 1]);
    return newList;
  }
}



module.exports = middle;


/* const middleOfArray = middle([1, 2, 3, 4, 5]);
console.log(middleOfArray);
assertArraysEqual(middleOfArray,[3]); */

//middle([1]) // => []
//middle([1, 2]) // => []

//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3]

//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

