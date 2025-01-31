// Array of strings
const sentences = ["Hello world", "JavaScript is fun", "I love coding"];

// Using map function to convert each string to an array of words
const arraysOfWords = sentences.map(sentence => sentence.split(" "));

console.log(arraysOfWords);
