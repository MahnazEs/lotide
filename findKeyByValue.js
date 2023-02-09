const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
};



const findKeyByValue = function (obj, value) {
  let result = "";
  let index = 0;

  const newObjectKey = Object.keys(obj);//key------dtama

  for (const element in obj) {
    if (obj[element] === value) {//value----------The Wire
      result = newObjectKey[index];
      //console.log("result****", result);
      break;
    }
    index++;
    result = undefined;
    //console.log("result****", result);
  }
  return result;
}



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);