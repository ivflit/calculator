const display = document.querySelector(".calc-display");
const buttonContainer = document.querySelector(".calc-buttons");
let currentChar;
let currentInput = "";
let currentCalculation = "";

buttonContainer.addEventListener("click", function (e) {
  currentChar = e.target.innerHTML;
  analyseCharacter(currentChar);
});

function analyseCharacter(character) {
  switch (character) {
    case "+":
    case "-":
      handleOperation(character);
    case "÷":
      character = "/";
      handleOperation(character);
    case "x":
      character = "*";
      handleOperation(character);
      break;

    case "C":
      clear();
      break;
    case "=":
      calculateResult();
      break;
    default:
      // Number pressed
      appendToInput(character);
  }
}

function appendToInput(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function handleOperation(operation) {
  if (currentInput !== "") {
    currentCalculation += currentInput;
    currentCalculation += operation;
    currentInput = "";
  }
}

function calculateResult() {
  if (currentInput !== "") {
    currentCalculation += currentInput;
    try {
      currentInput = eval(currentCalculation).toString();
    } catch (error) {
      currentInput = "Error";
    }
    currentCalculation = "";
    display.textContent = currentInput;
  }
}

function clear() {
  currentInput = "";
  display.value = "";
  display.textContent = "0";
}
