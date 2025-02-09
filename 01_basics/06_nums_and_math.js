const score = 400
console.log(score);
//primitive number type

const balance = new Number(100) 
console.log(balance);
//number object

console.log(balance.toString().length);
//converts into string
console.log(balance.toFixed(1));
//.toFixed(1) rounds the number to 1 decimal place.

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
//.toPrecision(n) formats a number with n significant digits.
//123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
//.toLocaleString('en-IN') formats the number using Indian number system (lakhs, crores).
//10,00,000
// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
//built-in JavaScript object

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// generates a random decimal between 0 and 1.

console.log((Math.random()*10) + 1);
// generates a random decimal between 0 and 10.
//when *(num) upper limit is that num 

console.log(Math.floor(Math.random()*10) + 1);
//converts the prev result into a whole number

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//*(max-min+1) means lower limit = min and upper limit = max
//and math.floor to get a whole number 
