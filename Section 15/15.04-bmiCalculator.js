function bmiCalculator(weight, height){
    var bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "your bmi is " + bmi + ", So you are underweight";
    } else if(bmi >= 18.5 &&  bmi <= 24.9){
        return "your bmi is " + bmi +" So you hve normal weight";
    }
    else{
        return "your bmi is " + bmi +", So you are over weight";
    }

}