const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNumber () {
  return +userInput.value
}
// added this function to extract info from userInput and keep code DRY

function add() {
  const enteredNumber = getUserInputNumber();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
