// Function to find the largest number between two numbers
function findLargest(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is the largest number");
  } else if (num2 > num1) {
    console.log(num2 + " is the largest number");
  } else {
    console.log("Both numbers are equal");
  }
}

findLargest(10, 5);   
findLargest(7, 12); 
findLargest(8, 8); 