//Using map to Create HTML Elements
const names = ["John", "Stephan", "Hester", "George"];
const listItems = names.map(function(name) {
  return `<li>${name}</li>`;
});
console.log("Result:",listItems);