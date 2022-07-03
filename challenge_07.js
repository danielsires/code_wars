// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
const array = [2, 4, 5];
const array2 = [2, 4, 5, 6];
console.log(sum(array)); // 11
console.log(sum(array2)); // 17
