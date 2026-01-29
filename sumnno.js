// Method 1: Using a loop
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of first 100 natural numbers is: " + sum);

// Method 2: Using the formula n(n+1)/2
let n = 100;
let sumFormula = (n * (n + 1)) / 2;
console.log("Sum using formula is: " + sumFormula);