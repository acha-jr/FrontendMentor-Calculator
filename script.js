const keys = document.querySelectorAll("[keys]");

const result = document.querySelector("#result");
const equal = document.querySelector("[button='equal']");
const del = document.querySelector("[button='del']");
const clear = document.querySelector("[button='reset']");

const multiply = document.querySelector("[button='multiply']");
const decimal = document.querySelector("[button='point']");

//display text when clicked on
keys.forEach((e) => {
  e.addEventListener("click", () => {
    result.value += e.textContent;
  });
});

//displays x as "*" when clicked
let displayMult = "*";
multiply.addEventListener("click", () => {
  result.value += displayMult;
});

//displays "0." instead of "."
let zeroDecimal = "0.";
decimal.addEventListener("click", () => {
  result.value += zeroDecimal;
});

//remove the last digit of the input
del.addEventListener("click", () => {
  let backspace = result.value.slice(0, -1);
  result.value = backspace;
});

//clears the input when clicked
clear.addEventListener("click", () => {
  result.value = "";
});

//solves the expression and displays the solution
equal.addEventListener("click", () => {
  let solution = eval(result.value);
  if (result.value != "") {
    result.value = solution;
  }
});

//toggle theme
const themeOne = document.getElementById("one");
const themeTwo = document.getElementById("two");
const themeThree = document.getElementById("three");
const ball = document.querySelector(".ball");

themeOne.addEventListener("click", () => {
  document.body.classList = "theme-one";
});

themeTwo.addEventListener("click", () => {
  document.body.classList = "theme-two";
});

themeThree.addEventListener("click", () => {
  document.body.classList = "theme-three";
});
