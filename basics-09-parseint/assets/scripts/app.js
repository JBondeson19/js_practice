const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber () {
  return +userInput.value;
}
// added this function to extract info from userInput and keep code DRY

function createAndWriteOutput(operator, resultBeforeCal, calcNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// DRYing out 'outPutResult' at the end of each function

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
}
// refactored this to make variables DRY

function subtract () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}


// new function - copied add() and refactored

function multiply () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

// new function 

function divide () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}
// new function



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);