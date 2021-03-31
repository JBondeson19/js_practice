const defaultResult = 0;
let currentResult = defaultResult;



// 'add'function below 
currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);


function add(num1, num2) {
    const result = num1 + num2;
    return result;
}