// Example array
let numbers = [12, 45, 67, 23, 89, 34, 90, 11, 56, 78];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Count of even numbers: " + evenCount);
console.log("Count of odd numbers: " + oddCount);