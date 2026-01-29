// Method 1: Using a loop
let numbers = [12, 45, 67, 23, 89, 34, 90, 11, 56, 78];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is: " + largest);


// Method 2: Using Math.max with spread operator
let largestNum = Math.max(...numbers);
console.log("Largest number using Math.max is: " + largestNum);