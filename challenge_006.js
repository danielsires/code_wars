// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let numStr = n.toString();
  let numArr = numStr.split("").reverse();

  return numArr.map((n) => Number(n));
}

console.log(digitize(345243));
console.log(digitize(0));
console.log(digitize(76));
