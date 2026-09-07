const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Compose your tweet: ", function(tweet) {

    var tweetcount = tweet.length;

    console.log(
        "You have written " + tweetcount +
        " characters, you have " +
        (140 - tweetcount) +
        " characters remaining."
    );

    rl.close();
});