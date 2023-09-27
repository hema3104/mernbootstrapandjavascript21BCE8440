function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: Division by zero!";
    }
}

// Example usage
var number1 = 10;
var number2 = 5;

var multiplicationResult = multiply(number1, number2);
var divisionResult = divide(number1, number2);

console.log("Multiplication result:", multiplicationResult);
console.log("Division result:", divisionResult);
