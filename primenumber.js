// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    console.log(num + " is NOT a prime number");
    return;
  }

  // Check divisibility from 2 up to sqrt(num)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(num + " is NOT a prime number");
      return;
    }
  }

  console.log(num + " is a PRIME number");
}

isPrime(2);  
isPrime(7);  
isPrime(10);  
isPrime(1);
isPrime(97);   