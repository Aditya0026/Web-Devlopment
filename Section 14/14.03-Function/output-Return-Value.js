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

console.log("Hello master, here is your " + getMilk(10, 3) + " change.")