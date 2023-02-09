
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



const without = function (arrayList, itemRemove) {
  let newList = [];
  let sameItem = false;
  if (arrayList.length < 1 || itemRemove.length < 1) {
    return console.log("please enter data!");
  }
  for (let i = 0; i < arrayList.length; i++) {
    for (let j = 0; j < itemRemove.length; j++) {
      if (arrayList[i] === itemRemove[j]) {
        sameItem = true;
        break;
      }
      sameItem = false;
    }
    if (!sameItem) {
      newList.push(arrayList[i]);
    }
  }
  console.log(newList);
}


const itemList = ["hello", "world", "lighthouse"];
without(itemList, ["lighthouse"]);
//assertArraysEqual(itemList, ["hello", "world", "lighthouse"]);

