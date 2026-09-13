function bmiCalculator(weight, height) {

   // var bmi = weight / (height * height);
   var bmi = weight / Math.pow(height, 2);
    return(bmi);
}
var bmi = bmiCalculator(65, 4);
console.log(bmi);
