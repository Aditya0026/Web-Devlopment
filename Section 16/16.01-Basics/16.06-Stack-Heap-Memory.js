/*
 There are two type's of memory in js
 1. Stack Memory : primitive data type used Stack memory
 2. Heap Memory :  Non-primitive data type used Heap momory 
*/


// Stack Memory example 
let Student = "Arun";
let anotherStu = Student;
anotherStu = "Abhisheak";
console.log(anotherStu); // we get "Abhisheak"
console.log(Student); // but here we get "Arun" because it's copy we can't make changes in original value

let userOne = {

    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "aditya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

