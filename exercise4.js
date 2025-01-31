// Function to convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

// Array of Celsius values
const celsiusArray = [0, 10, 20, 30, 40, 50];

// Using map function to convert the array to Fahrenheit
const fahrenheitArray = celsiusArray.map(celsiusToFahrenheit);

console.log("Result:",fahrenheitArray);
