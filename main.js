"use strict";
const title = document.querySelector(".title");

const display = document.querySelector(".display-screen");

const clearBtn = document.querySelector(".clear");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const minusBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".add");
const equalsBtn = document.querySelector(".equals");
const numBtn = document.querySelectorAll(".btn-num");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;

// Mathmatical operations
const add = function (a, b) {
  return a + b;
};

const minus = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const operation = function (num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  return operator(num1, num2);
};

// Show what value the buttons have to the display
const populateDisplay = function () {
  numBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      //what is currently on the screen
      const currentDisplayValue =
        document.querySelector(".display-screen").textContent;

      //what is on the screen plus the new button pressed in a variable
      const newDisplay = currentDisplayValue + btn.textContent;

      // display ^^ variable
      display.textContent = newDisplay;
    });
  });
};

populateDisplay();

//TODO
// 1) functionality for operator buttons
// 2) Reset button functionality
// 3) Equals button equals button functionality

addBtn.addEventListener("click", () => {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    operator = add;
    result = operation(firstNumber, secondNumber, operator);
    firstNumber = result;
    console.log(`this is firstnum ${firstNumber}`);
    console.log(` second num ${secondNumber}`);
    console.log(`result ${result}`);
    display.textContent = firstNumber;
    secondNumber = null;
  }
  firstNumber = display.textContent;
  operator = add;
  display.textContent = "";
});
minusBtn.addEventListener("click", () => {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    operator = minus;
    result = operation(firstNumber, secondNumber, operator);
    firstNumber = result;
    console.log(`this is firstnum ${firstNumber}`);
    console.log(` second num ${secondNumber}`);
    console.log(`result ${result}`);
    display.textContent = firstNumber;
    secondNumber = null;
  }
  firstNumber = display.textContent;
  operator = minus;
  display.textContent = "";
});
multiplyBtn.addEventListener("click", () => {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    operator = multiply;
    result = operation(firstNumber, secondNumber, operator);
    firstNumber = result;
    console.log(`this is firstnum ${firstNumber}`);
    console.log(` second num ${secondNumber}`);
    console.log(`result ${result}`);
    display.textContent = firstNumber;
    secondNumber = null;
  }
  firstNumber = display.textContent;
  operator = multiply;
  display.textContent = "";
});
divideBtn.addEventListener("click", () => {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    operator = divide;
    result = operation(firstNumber, secondNumber, operator);
    firstNumber = result;
    console.log(`this is firstnum ${firstNumber}`);
    console.log(` second num ${secondNumber}`);
    console.log(`result ${result}`);
    display.textContent = firstNumber;
    secondNumber = null;
  }
  firstNumber = display.textContent;
  operator = divide;
  display.textContent = "";
});

equalsBtn.addEventListener("click", () => {
  if (firstNumber !== null) {
    secondNumber = display.textContent;
    result = operation(firstNumber, secondNumber, operator);
    display.textContent = "";
    display.textContent = result;
    firstNumber = result;

    firstNumber = null;
    secondNumber = null;
  }
});
