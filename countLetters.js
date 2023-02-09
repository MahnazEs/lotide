// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
};




const countLetters = function (sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]+=1;
      } else {
        results[letter] = 1;
      }
    }
  }
      
  return results;
}

const result = countLetters("lighthouse in the house");
console.log(result);


