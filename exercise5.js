//Using map to Convert Strings to Uppercase
const fruits = ["apple", "banana", "papaya", "orange"];
const uppercaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log("Result:",uppercaseFruits);