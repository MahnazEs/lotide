

// FUNCTION IMPLEMENTATION
/* const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
}; */




const eqArrays = function (arr1, arr2) {
  let lenArr1 = arr1.length;
  let lenArr2 = arr1.length;
  let result = true;
  if (lenArr1 !== lenArr2) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && (eqArrays(arr1[i], arr2[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(arr1[i])) && arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};




//TEST CODE
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
module.exports = eqArrays;








/* eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays([], []) // => false // console.log("please enter data in Array!");
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false */
