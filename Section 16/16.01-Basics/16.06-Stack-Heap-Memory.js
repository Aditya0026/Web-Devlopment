/*
 There are two type's of memory in js
 1. Stack Memory : primitive data type used Stack memory
 2. Heap Memory :  Non-primitive data type used Heap momory 
*/

// Note : “Stack is used for function execution and primitive data,
//  while heap is used for storing objects and reference-type data.”

// Stack Memory example 
let Student = "Aditya";
let anotherStu = Student;
anotherStu = "Abhisheak";
console.log(anotherStu); // we get "Abhisheak"
console.log(Student); // but here we get "Arun" because it's copy we can't make changes in original value



// Heap memory example 
// if change value so original value will be change 
// 
let userOne = {

    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "aditya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

