//Using map to Extract Lengths of Strings
const words = ["Apple", "Banana", "Avocado", "Blackberry"];
const lengths = words.map(function(word) {
  return word.length;
});
console.log("Result:",lengths);