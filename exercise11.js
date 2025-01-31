//Using map to Combine First and Last Names
function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}

const persons = [
  {firstname: "Stephan", lastname: "Walker"},
  {firstname: "John", lastname: "Dsena"},
  {firstname: "Hester", lastname: "Sina"}
];

const map1 = persons.map(getFullName);
console.log(map1);