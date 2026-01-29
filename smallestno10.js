// Method 1: Using a loop
let numbers = [12, 45, 67, 23, 89, 34, 90, 11, 56, 78]; 
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Smallest number is: " + smallest);


// Method 2: Using Math.min with spread operator
let smallestNum = Math.min(...numbers);
console.log("Smallest number using Math.min is: " + smallestNum);