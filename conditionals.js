let a = 27;
let b = 45;
let c = 19;

// Comparison between two numbers
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (b > a) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log(`${a} and ${b} are equal`);
}

// Comparison between three numbers (using logical && and strict ===)
if (a > b && a > c) {
  console.log(`a=${a} is the greatest`);
} else if (b > a && b > c) {
  console.log(`b=${b} is the greatest`);
} else if (c > a && c > b) {
  console.log(`c=${c} is the greatest`);
} else if (a === b && a > c) {
  console.log(`a=${a} and b=${b} both are greatest`);
} else if (a === c && a > b) {
  console.log(`a=${a} and c=${c} both are greatest`);
} else if (b === c && b > a) {
  console.log(`b=${b} and c=${c} both are greatest`);
} else {
  console.log(`a=${a}, b=${b} and c=${c} all are equal.`);
}

// ternary operator : shorthand way for if....else
let age=18;
let result=age>=18?"Adult":"Minor"
console.log(result);