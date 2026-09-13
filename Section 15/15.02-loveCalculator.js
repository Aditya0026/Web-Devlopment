const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function(name) {

    rl.question("What is the name of your partner? ", function(partnerName) {

        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;

        console.log(
            name + " and " + partnerName +
            ", your love score is " + loveScore + "%"
        );

        rl.close();
    });
});