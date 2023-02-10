// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
};



const findKey = function (obj, callback) {
  let result = "";

  for (let item in obj) {
    //console.log(item);
    //console.log("value: ",obj[item]);
    if (callback(obj[item])) {
      result = item;
      //console.log("result: ",result)
      return result;
    }
  }
  return result;
}



const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"


assertEqual(result1, "noma");