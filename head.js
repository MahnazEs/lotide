// FUNCTION IMPLEMENTATION
/* const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
}; */

const assertEqual = require('./assertEqual');

const head = function (data) {
  if (data) {
    const firstElement = data.shift();
    return firstElement;
  }else{
    return undefined;
  }
}

// TEST CODE
/* assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); */

module.exports=head;