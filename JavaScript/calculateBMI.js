// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

var weight = 30;
var height = 1.8;

function bmi(weight, height) {
  let total = weight / Math.pow(height, 2);
  return total <= 18.5
    ? "Underweight"
    : total <= 25.0
    ? "Normal"
    : total <= 30.0
    ? "Overweight"
    : total > 30.0
    ? "Obese"
    : "Nada";
}
