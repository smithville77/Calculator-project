const buttonOne = getElementById("1")
const buttonTwo = getElementById("2")
const buttonThree = getElementById("3")
const buttonFour = getElementById("4")
const buttonFive = getElementById("5")
const buttonSix = getElementById("6")
const buttonSeven = getElementById("7")
const buttonEight = getElementById("8")
const buttonNine = getElementById("9")
const buttonZero = getElementById("0")

function add(num1, num2){
  return (num1 + num2);
}

function subtract(num1, num2) {
  return (num1 - num2);
}

function multiply(num1, num2) {
  return (num1 * num2);
}

function divide(num1, num2) {
  return (num1 / num2);
}


//Not sure if this works(could be completely wrong) --- testing needed
function operate(operator, num1, num2) {
  if (operator === "add") {
    return add(num1, num2);
  } else if (operator === "subtract") {
    return subtract(num1, num2);
  } else if (operator === "multiply") {
    return multiply(num1, num2);
  } else if (operator === "divide") {
    return divide(num1, num2);
  }
}

let displayValue = 0
const display = document.getElementById("displayWindow");

function numbers() {
  buttonOne.addEventListener("click", displayValue="1")
  console.log(displayValue)
}

function updateDisplay() {
  
}

// clear button
function clear() {
  display.innerHTML(" ");
}

updateDisplay();
console.log(multiply(4, 50))
console.log(add(6, 6))
console.log(subtract(10, 5))
console.log(divide(10, 2))