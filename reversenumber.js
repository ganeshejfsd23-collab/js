// Function to reverse a given number using math
function reverseNumberMath(num) {
  let reversed = 0;
  let original = num;

  while (num > 0) {
    let digit = num % 10;          // Get last digit
    reversed = reversed * 10 + digit; // Build reversed number
    num = Math.floor(num / 10);    // Remove last digit
  }

  console.log("Reversed number of " + original + " is " + reversed);
}

reverseNumberMath(12345);  
reverseNumberMath(9870);   
reverseNumberMath(100);   
// Function to reverse a given number using string conversion
function reverseNumber(num) {
  // Convert number to string, split into characters, reverse, join back, then convert to number
  let reversed = Number(num.toString().split("").reverse().join(""));
  console.log("Reversed number of " + num + " is " + reversed);
}

reverseNumber(12345);   
reverseNumber(9870);    
reverseNumber(100);     