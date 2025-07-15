function calculateBMI() {
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");
const bmiValueElement = document.getElementById("bmiValue");
const bmiCategoryElement = document.getElementById("bmiCategory");
const categoryTextElement = document.getElementById("categoryText");
const categoryIconElement = document.getElementById("categoryIcon");
const errorMessageElement = document.getElementById("errorMessage");

    
resultDiv.classList.add("hidden");
errorMessageElement.classList.add("hidden");

const height = parseFloat(heightInput.value);
const weight = parseFloat(weightInput.value);

if (!height || !weight || height <= 0 || weight <= 0) {
  errorMessageElement.classList.remove("hidden");
  return;
}

const heightInMeters = height / 100; 
const bmi = (weight / (heightInMeters * heightInMeters));
const bmiRounded = bmi.toFixed(1); 

let categoryMessage = "";
let categoryClass = "";
let iconClass = "";

if (bmi < 18.5) {
  categoryMessage = "Underweight";
  categoryClass = "bg-blue-600 text-white";
  iconClass = "fas fa-arrow-down";
} else if (bmi < 25) {
  categoryMessage = "Normal Weight";
  categoryClass = "bg-green-600 text-white";
  iconClass = "fas fa-check-circle";
} else if (bmi < 30) {
  categoryMessage = "Overweight";
  categoryClass = "bg-yellow-600 text-white";
  iconClass = "fas fa-exclamation-triangle";
} else {
  categoryMessage = "Obese";
  categoryClass = "bg-red-600 text-white";
  iconClass = "fas fa-exclamation-circle";
}

bmiValueElement.textContent = bmiRounded;
categoryTextElement.textContent = categoryMessage;
categoryIconElement.className = iconClass; 

bmiCategoryElement.className = `inline-flex items-center px-5 py-2 rounded-full text-lg font-semibold shadow-md ${categoryClass}`;

resultDiv.classList.remove("hidden");
resultDiv.classList.add("animate-slideInFromTop");
    }

 


 