// Example array
let numbers = [12, 45, 67, 23, 89, 34, 90, 11, 56, 78];

// 1. Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers: " + evenNumbers);

// 2. Filter odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers: " + oddNumbers);

// 3. Filter numbers greater than 50
let greaterThan50 = numbers.filter(num => num > 50);
console.log("Numbers greater than 50: " + greaterThan50);

// 4. Filter numbers less than 30
let lessThan30 = numbers.filter(num => num < 30);
console.log("Numbers less than 30: " + lessThan30);