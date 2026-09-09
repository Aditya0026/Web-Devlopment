const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function(name) {

    var firstChar = name.slice(0, 1);

    var toUpperCaseFirstChar = firstChar.toUpperCase();

    var restOfName = name.slice(1, name.length);

    restOfName = restOfName.toLowerCase();

    var capitalizeName = toUpperCaseFirstChar + restOfName;

    console.log("Hello " + capitalizeName);

    rl.close();
});