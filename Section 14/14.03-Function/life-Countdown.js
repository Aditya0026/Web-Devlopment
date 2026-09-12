function lifeInWeeks(age){

    var remainingAge = 90 - age;
    var days = remainingAge * 365;
    var weeks = remainingAge * 52;
    var month = remainingAge * 12;

    console.log("you have " +days+ " days, " + weeks +" Weeks and " +month+ " Month left.");



}
lifeInWeeks(4);