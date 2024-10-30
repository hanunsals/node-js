// Descriptive functions
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function substract(a, b) {
  return a - b;
}
function division(a, b) {
  return a / b;
}

console.log("add: ", add(2, 3));
console.log("multiply: ", multiply(2, 3));
console.log("substract: ", substract(2, 3));
console.log("division: ", division(2, 3));

// Expressive functions
const addExp = function (a, b) {
  return a + b;
};
const multiplyExp = function (a, b) {
  return a * b;
};
const substractExp = function (a, b) {
  return a - b;
};
const divisionExp = function (a, b) {
  return a / b;
};
console.log("add: ", addExp(2, 3));
console.log("multiply: ", multiplyExp(2, 3));
console.log("substract: ", substractExp(2, 3));
console.log("division: ", divisionExp(2, 3));

// Arrow functions
const addArrow = (a, b) => a + b;
const multiplyArrow = (a, b) => a * b;
const substractArrow = (a, b) => a - b;
const divisionArrow = (a, b) => a / b;

console.log("add: ", addArrow(2, 3));
console.log("multiply: ", multiplyArrow(2, 3));
console.log("substract: ", substractArrow(2, 3));
console.log("division: ", divisionArrow(2, 3));

// Default Parameter (ES6)
const addWithDefault = (a = 0, b = 0) => {
  return a + b;
};

console.log("add with default parameter: ", addWithDefault());
console.log("add with custom parameter: ", addWithDefault(5, 5));
