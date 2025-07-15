function calculateBMI() {
const height = parseFloat(document.getElementById("height").value);
const weight = parseFloat(document.getElementById("weight").value);
const resultDiv = document.getElementById("result");

if (!height || !weight || height <= 0 || weight <= 0) {
  resultDiv.innerHTML = "invailed";
  return;
}

const heightInMeters = height / 100;
const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
let message = "";

if (bmi < 18.5) {
  message = `Your BMI is <strong>${bmi}</strong>  Underweight `;
  
} else if (bmi < 25) {
  message = `Your BMI is <strong>${bmi}</strong>  Normal `;
} else if (bmi < 30) {
  message = `Your BMI is <strong>${bmi}</strong>  Overweight `;
} else {
}

resultDiv.innerHTML = message;
 }