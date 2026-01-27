// Function to find the largest among three numbers
function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number");
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number");
  } else {
    console.log(num3 + " is the largest number");
  }
}

findLargest(10, 5, 8);   
findLargest(7, 12, 9);
findLargest(15, 15, 10); 