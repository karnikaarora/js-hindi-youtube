//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n
//In JavaScript, the suffix n after a number denotes a BigInt.


// Reference (Non primitive)
// Array, Objects, Functions

//ARRAY
const heros = ["shaktiman", "naagraj", "doga"];   
//👉 Use const for arrays when you don't want to reassign the entire array but still want to modify its contents.

//OBJECT
let myObj = {
    name: "hitesh",
    age: 22,
}
// myObj.age = 23; // ✅ Allowed (modifying property)
// console.log(myObj); // { name: "hitesh", age: 23 }
//let allows reassignment, meaning we can change the reference of the object.

//FUNCTION
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//data types (primitive)
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"

//Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object