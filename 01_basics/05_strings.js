const name = "hitesh"  
//string
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
//String object

// console.log(gameName[0]);
console.log(gameName.__proto__);
//__proto__ is used to access an object's prototype (its inherited methods and properties).

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);
//The substring(start, end) method extracts characters from index start to end - 1.
// Does not support negative indexes.
// If end is less than start, it swaps them.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// slice(start, end) extracts characters from start to end - 1.
// Supports negative indexes, where -1 refers to the last character.

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
//.trim() removes leading and trailing spaces (but not spaces inside the string).

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
//.replace(oldValue, newValue) replaces the first occurrence of oldValue with newValue.

console.log(url.includes('sundar'))
// .includes(value) checks if value exists in the string.
// Returns true if found, otherwise false.

console.log(gameName.split('-'));
//.split(separator) splits the string into an array based on the given separator.
//returns an array 
