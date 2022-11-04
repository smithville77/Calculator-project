

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


let previousText = "";

let displayValue = "";
let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let displayText = "";


// number functions
function addOne () {
  displayValue = displayValue + "1";
  displayText = displayText + "1";
  updateDisplay();
}
function addTwo () {
  displayValue = displayValue + "2";
  displayText = displayText + "2";
  updateDisplay();
  return displayValue;
}
function addThree () {
  displayValue = displayValue + "3";
  displayText = displayText + "3";
  updateDisplay();
  return displayValue;
}
function addFour () {
  displayValue = displayValue + "4";
  displayText = displayText + "4";
  updateDisplay();
  return displayValue;
}
function addFive () {
  displayValue = displayValue + "5";
  displayText = displayText + "5";
  updateDisplay();
  return displayValue;
}
function addSix () {
  displayValue = displayValue + "6";
  displayText = displayText + "6";
  updateDisplay();
  return displayValue;
}
function addSeven () {
  displayValue = displayValue + "7";
  displayText = displayText + "7";
  updateDisplay();
  return displayValue;
}
function addEight () {
  displayValue = displayValue + "8";
  displayText = displayText + "8";
  updateDisplay();
  return displayValue;
}
function addNine () {
  displayValue = displayValue + "9";
  displayText = displayText + "9";
  updateDisplay();
  return displayValue;
}
function addZero () {
  displayValue = displayValue + "0";
  displayText = displayText + "0";
  updateDisplay();
  return displayValue;
}


function addButton () {
  num1 = displayValue;
  displayText = " + "
  document.getElementById("previous").innerHTML =  displayValue;
  updateDisplay();
  displayValue = "";
  return num1, operator = "add", displayValue;

}

function subtractButton () {
  num1 = displayValue;
  displayText = " - "
  document.getElementById("previous").innerHTML = displayValue;
  updateDisplay();
  displayValue = "";
  return num1, operator = "subtract", displayValue;
}
function multiplyButton () {
  num1 = displayValue;
  displayText = " * "
  document.getElementById("previous").innerHTML =  displayValue;
  updateDisplay();
  displayValue = "";
  return num1, operator = "multiply", displayValue;
}
function divideButton () {
  num1 = displayValue;
  displayText =  " ÷ ";
  document.getElementById("previous").innerHTML = displayValue;
  updateDisplay();
  displayValue = "";
  return num1, operator = "divide", displayValue;
}

// update display
function updateDisplay() {
  document.getElementById("displayWindow").innerHTML = displayText;
}

// clear button ------- currently works as is.
function clearDisplay() {
  displayValue = "";
  displayText = "";
  previousText = "";
  document.getElementById("displayWindow").innerHTML = displayText;
  document.getElementById("previous").innerHTML = previousText;
  
}

function operate() {
  num2 = displayValue;
  num1Int = parseInt(num1);
  num2Int = parseInt(num2);
  

  if (operator === "add") {
    result = add(num1Int, num2Int);
    document.getElementById("previous").innerHTML = `${num1Int} + ${num2Int}`;
    displayValue = result;
    num1Int = result;
    previousText = previousText + displayText;
    displayText =  ` = ${result}`;
    
    updateDisplay();

  } else if (operator === "subtract") {
    result = subtract(num1Int, num2Int);
    document.getElementById("previous").innerHTML = `${num1Int} - ${num2Int}`;
    displayValue = result;
    num1Int = result;
    previousText = previousText + displayText;
    displayText = ` = ${result}`;
    updateDisplay();
  
  } else if (operator === "multiply") {
    result = multiply(num1Int, num2Int);
    document.getElementById("previous").innerHTML = `${num1Int} * ${num2Int}`;
    displayValue = result;
    num1Int = result;
    previousText = previousText + displayText;
    displayText =  ` = ${result}`;
    updateDisplay();

  } else if (operator === "divide") {
    if (num1Int === 0 || num2Int === 0) {
      displayText = "Nice try, smartass."
      updateDisplay();
    } else {
    result = divide(num1Int, num2Int);
    document.getElementById("previous").innerHTML = `${num1Int} ÷ ${num2Int}`;
    displayValue = result;
    num1Int = result;
    previousText = previousText + displayText;
    displayText =  ` = ${result}`;
    updateDisplay(); 
    }
}
}