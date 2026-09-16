/*
(1) Primitive
    7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTem = null;
let userEmail;


const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 9234234023439203n;
console.log(typeof bigNumber);


/*
(2) Reference (Non Primitive)
    3 types: Array, Object, Function
*/
// Array Declearation
const heros = ["AryaStark", "Aditya", "Nothing"];
console.log(heros);


// Object Declearation
const myObj = {
    name :  "Aditya",
    age : 23,
}

// Function Declearation

const myFunction = function(){
    console.log("Hello I am trying to be nothing. Shapelees");
}
console.log(myFunction);