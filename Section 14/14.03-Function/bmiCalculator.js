function bmiCalculator(weight, height) {

   // var bmi = weight / (height * height);
   var bmi = weight / Math.pow(height, 2);

   // Math.round will give the output if 3.5 so it will return 4
   // if 3.4 so ouput will be 3 
    return Math.round(bmi); 
}
var bmi = bmiCalculator(65, 2);
console.log(bmi);
