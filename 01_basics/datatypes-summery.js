//  Premitive 
//  7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2345678885874n

// Reference (Non Primitive)
//  Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Vishal",
    age: 22,
}

const myFunction = function(){
    console.log("Hellow World");
}

console.log(typeof outsideTemp)



// ***********************************
// stack (Premitive) and Heap (Non-Primitive)

let name1 = "Vishal";

let name2 = name1;
name2 = "VishalBhau";

console.log(name1)
console.log(name2)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);