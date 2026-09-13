function bmiCalculator(weight, height) {

   // var bmi = weight / (height * height);
   var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}
var bmi = bmiCalculator(65, 2);
console.log(bmi);
