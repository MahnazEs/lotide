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



console.log(eqArrays([1, 2, 3], [3, 2, 1]));


/* eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays([], []) // => false // console.log("please enter data in Array!");
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false */
