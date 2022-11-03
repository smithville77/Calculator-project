// const buttonOne = getElementById("One");
// const buttonTwo = getElementById("2")
// const buttonThree = getElementById("3")
// const buttonFour = getElementById("4")
// const buttonFive = getElementById("5")
// const buttonSix = getElementById("6")
// const buttonSeven = getElementById("7")
// const buttonEight = getElementById("8")
// const buttonNine = getElementById("9")
// const buttonZero = getElementById("0")


// operator functions
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



let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";
let result = "";


// number functions
function addOne () {
  displayValue = displayValue + "1";
  updateDisplay();
}
function addTwo () {
  displayValue = displayValue + "2";
  updateDisplay();
  return displayValue;
}
function addThree () {
  displayValue = displayValue + "3";
  updateDisplay();
  return displayValue;
}
function addFour () {
  displayValue = displayValue + "4";
  updateDisplay();
  return displayValue;
}
function addFive () {
  displayValue = displayValue + "5";
  updateDisplay();
  return displayValue;
}
function addSix () {
  displayValue = displayValue + "6";
  updateDisplay();
  return displayValue;
}
function addSeven () {
  displayValue = displayValue + "7";
  updateDisplay();
  return displayValue;
}
function addEight () {
  displayValue = displayValue + "8";
  updateDisplay();
  return displayValue;
}
function addNine () {
  displayValue = displayValue + "9";
  updateDisplay();
  return displayValue;
}
function addZero () {
  displayValue = displayValue + "0";
  updateDisplay();
  return displayValue;
}


function addButton () {
  num1 = displayValue;
  displayValue = displayValue + " + "
  updateDisplay();
  clearDisplay();
  return num1, operator = "add", displayValue;

}

function subtractButton () {
  num1 = displayValue;
  displayValue = displayValue + " - "
  updateDisplay();
  clearDisplay();
  return num1, operator = "subtract", displayValue;
}
function multiplyButton () {
  num1 = displayValue;
  displayValue = displayValue + " * "
  updateDisplay();
  clearDisplay();
  return num1, operator = "multiply", displayValue;
}
function divideButton () {
  num1 = displayValue;
  displayValue = displayValue + " ÷ "
  updateDisplay();
  clearDisplay();
  return num1, operator = "divide", displayValue;
}



// update display
function updateDisplay() {
  document.getElementById("displayWindow").innerHTML = displayValue;
  console.log(displayValue);
}

// clear button ------- currently works as is.
function clearDisplay() {
  displayValue = "";
  document.getElementById("displayWindow").innerHTML = displayValue;
  // return displayValue = 0;
}

//Not sure if this works(could be completely wrong) --- testing needed
function operate() {
  num2 = displayValue;
  num1Int = parseInt(num1);
  num2Int = parseInt(num2);

  if (operator === "add") {
    result = add(num1Int, num2Int);
    displayValue = result;
    num1Int = result;
    updateDisplay();

  } else if (operator === "subtract") {
    result = subtract(num1Int, num2Int);
    displayValue = result;
    num1Int = result;
    updateDisplay();

  } else if (operator === "multiply") {
    result = multiply(num1Int, num2Int);
    displayValue = result;
    num1Int = result;
    updateDisplay();

  } else if (operator === "divide") {
    result = divide(num1Int, num2Int);
    displayValue = result;
    num1Int = result;
    updateDisplay();

  
}
}
