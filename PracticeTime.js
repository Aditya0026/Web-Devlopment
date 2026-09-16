//var tweet = prompt("Compose your tweet");
//alert("you hae written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining");

/*
var name = "Aditya";
name = name.toLowerCase();
*/

/*
var name = prompt("What is your name");
Firstname = Firstname.toUpperCase();
alert("Hello "+Firstname+name);
*/

/*
var name = prompt("What is your name");
var firstChar = name.slice(0,1);
var toUpperCaseFC = firstChar.toUpperCase();
var  restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
var capitalizeName = toUpperCaseFC + restOfName;
alert("Hello "+capitalizeName); 
*/

/*
var da = prompt("What is your dog age");
var ha = ((da - 2) * 4) + 21;
alert("Your dog is "+ ha + " year old in humna age");

*/

/*
function getMilk(money){
console.log("leaving home");
console.log("moving right");
console.log("moving right");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("move right");
console.log("move right");

    var numberOfBotteles = Math.floor(money / 1.5); 
console.log("buy "+ numberOfBotteles + " bottles of Milk");
console.log("move left");
console.log("move left");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("move left");
console.log("move left");
console.log("Enter Home");
}
getMilk(10);

*/

/*
function lifeInWeeks(age){

    var remainingAge = 90 - age;
    var days = remainingAge * 365;
    var weeks = remainingAge * 52;
    var month = remainingAge * 12;

    console.log("you have " +days+ " days, " + weeks +" Weeks and " +month+ " Month left.");



}
lifeInWeeks(4);

*/

/*
function getMilk(money){
console.log("leaving home");
console.log("moving right");
console.log("moving right");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("move right");
console.log("move right");

console.log("buy "+ calcBottles(money, 1.5) + " bottles of Milk");

    
console.log("move left");
console.log("move left");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("move left");
console.log("move left");
console.log("Enter Home");

    return calcChange(money, 1.5);
    
}

function calcBottles(startingmoney, costPerBottle){
var numberOfBotteles = Math.floor(startingmoney / costPerBottle);
return numberOfBotteles;
}


function calcChange(startingAmount, costPerBottele){
    var Change = startingAmount % costPerBottele;
return Change;
}

console.log("Hello master, here is your " + getMilk(10, 3) + " change.");
*/

/*
function bmiCalculator(weigth, height){

    var bmi = weigth / Math.pow(height, 3);
    return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
*/

/*
prompt("What is your name");
prompt("What is the name of your love");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);
if(loveScore < 70) {
    alert("your love Score is "+ loveScore +"% you love each other like Mitish and Jyoti");
}
else{
    alert("your love Score is " + loveScore +"%")
}
*/

// bmi bmiCalculator

/*
function bmiCalculator(weight, height){
var bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "your bmi is " + bmi + ", underweight";
    } else if(bmi >= 18.5 && bmi <= 24.9){
        return "your bmi is " + bmi + " normal";
    }else{
        return "you are overweight.";
    }
}
*/

/*
var output = [];
var count = 1;
function fizzbuzz(){
output.push(count);
    count++;
    console.log(output);
}
*/

/*
var output = [];
var count = 1;
function fizzBuzz(){
    output.push(count);
    console.log(output);
}
*/


function whospaying(name){
    var name = ["Aditya", "ghgaa", "dfhao",];
    var numberOfPeople = name.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = name[randomPersonPosition];
    return randomPerson + "is going to buy the lunch todya";
        
}
console.log(whospaying());





