const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

// get input from input field
function getUserInputNumber () {
  return +userInput.value;
}


// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCal, calcNumber) {
  const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  // what's actually doing the math
  createAndWriteOutput('+', initialResult, enteredNumber);
    // just building the string
    const logEntry = {
      operation: 'ADD',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
    }
  logEntries.push(logEntry);
  console.log(logEntries)
}

function subtract () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}


function multiply () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}


function divide () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}



addBtn.addEventListener('click', add); //all from vendor file
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);