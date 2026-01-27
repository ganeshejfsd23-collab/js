// Function to find factorial using a loop
function factorial(num) {
  if (num < 0) {
    console.log("Factorial is not defined for negative numbers");
    return;
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log("Factorial of " + num + " is " + result);
}

factorial(5);  
factorial(0); 
factorial(-3);