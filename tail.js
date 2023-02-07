// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
};

/* const head = function(data) {
  if (data) {
    const firstElement = data.shift();
    return firstElement;
  } else {
    return undefined;
  }
}; */


const tail = function(info) {
  if (info) {
    const removeFirstElement = info.shift();
    return info;
  } else {
    return undefined;
  }
};


// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);