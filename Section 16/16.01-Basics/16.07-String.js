
const userName =  "Aditya";
const repoCount = 36

// using backstick it's provide string interpolation 
// We can directly add variable and Method inside backstick 

//console.log(`Hello my name is ${userName} and my repp count is ${repoCount}`)


const stu = new String ('Aditya');

console.log(stu);
// console.log(stu [4]);
// console.log(stu.length);

// console.log(stu.toUpperCase());
// console.log(stu.toLowerCase());


// console.log(stu.charAt(3));
// console.log(stu.indexOf('A'));

// note : we cant't use negative value in substring method
// const newString = stu.substring(0, 3);
// console.log(newString);

//Note:  We can use negative value in slice method
const stu2 = "nothing";
const anotherSting = stu2.slice(-5, 6);
console.log(anotherSting);



// Note : trim method will remove all the space 
const stu3 = "    Motubhai    ";
console.log(stu3);
console.log(stu3.trim());

const sym = Symbol("example");
console.log(String.sym); // "Symbol(example)"

 // replace method replace only first accurance 
 // allreplace method will replace all the accurance
const url = "https://aditya.google.com/%20githuboo26/%20repo";
console.log(url.replace("%20", "-"));
console.log(url.replaceAll("20", "00"));

// Split method uses for remove whatever value you wanna and it will 
// Display rest of the value seprately
const stu4 = "Aditya-Mohi-Deepak-Vikash-Abhisheak";
console.log(stu4);
console.log(stu4.split("-"));
