"use strict";

const title = document.querySelector(".title");

const display = document.querySelector(".display-screen");

const numBtn = document.querySelectorAll(".btn-num");
const clearBtn = document.querySelector(".clear");

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
