// Function for addition
function add(a, b) {
  console.log("Addition: " + (a + b));
}
// Function for subtraction
function subtract(a, b) {
  console.log("Subtraction: " + (a - b));
}
// Function for multiplication
function multiply(a, b) {
  console.log("Multiplication: " + (a * b));
}
// Function for division
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero!");
  } else {
    console.log("Division: " + (a / b));
  }
}
// Function for modulus (remainder)
function modulus(a, b) {
  if (b === 0) {
    console.log("Error: Modulus by zero!");
  } else {
    console.log("Modulus: " + (a % b));
  }
}
add(10, 5);        
subtract(10, 5);   
multiply(10, 5);   
divide(10, 5);     
divide(10, 0);     
modulus(10, 3);    
modulus(10, 0);    