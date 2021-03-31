const defaultResult = 0;
let currentResult = defaultResult;



currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult}  + 10) * 3 / 2 - 1`;


outputResult(currentResult, calculationDescription);

function addNumbers(num1, num2) {
    const result = num1 + num2;
    alert(`The result is ${result}!`)
}

addNumbers(1, 2);