//Using map to Extract Specific Properties
const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Stephan", age: 35 }
  ];
  
  const names = people.map(person => person.name);
  
  console.log("Result:",names);
  