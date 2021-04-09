const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

// get input from input field
function getUserInputNumber () {
  return +userInput.value;
}

function writeToLog(
  operationIdentifier, 
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  }
logEntries.push(logEntry);
console.log(logEntries)
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
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
    // just building the string
 
}

function subtract () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}


function multiply () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}


function divide () {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}



addBtn.addEventListener('click', add); //all from vendor file
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);