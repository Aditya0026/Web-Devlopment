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
console.log(Student);