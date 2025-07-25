document.addEventListener('DOMContentLoaded', function () {
    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
    };

    function updateDisplay() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.displayValue;
    }

    updateDisplay();

    function handleOperator(nextOperator) {
        return new Promise((resolve) => {
            const { firstOperand, displayValue, operator } = calculator;
            const inputValue = parseFloat(displayValue);

            if (operator && calculator.waitingForSecondOperand) {
                calculator.operator = nextOperator;
                resolve();
                return;
            }

            if (firstOperand == null && !isNaN(inputValue)) {
                calculator.firstOperand = inputValue;
            } else if (operator) {
                const result = calculate(firstOperand, inputValue, operator);

                calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
                calculator.firstOperand = result;
            }

            calculator.waitingForSecondOperand = true;
            calculator.operator = nextOperator;
            resolve();
        }).then(updateDisplay);
    }

    function calculate(firstOperand, secondOperand, operator) {
        if (operator === '+') {
            return firstOperand + secondOperand;
        } else if (operator === '-') {
            return firstOperand - secondOperand;
        } else if (operator === '*') {
            return firstOperand * secondOperand;
        } else if (operator === '/') {
            return firstOperand / secondOperand;
        } else if (operator === '%') {
            return firstOperand % secondOperand;
        }
        return secondOperand;
    }

    function resetCalculator() {
        return new Promise((resolve) => {
            calculator.displayValue = '0';
            calculator.firstOperand = null;
            calculator.waitingForSecondOperand = false;
            calculator.operator = null;
            resolve();
        }).then(updateDisplay);
    }

    function inputDigit(digit) {
        return new Promise((resolve) => {
            const { displayValue, waitingForSecondOperand } = calculator;

            if (waitingForSecondOperand === true) {
                calculator.displayValue = digit;
                calculator.waitingForSecondOperand = false;
            } else {
                calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
            }
            resolve();
        }).then(updateDisplay);
    }

    function inputDecimal(dot) {
        return new Promise((resolve) => {
            if (calculator.waitingForSecondOperand === true) {
                calculator.displayValue = "0.";
                calculator.waitingForSecondOperand = false;
                resolve();
                return;
            }

            if (!calculator.displayValue.includes(dot)) {
                calculator.displayValue += dot;
            }
            resolve();
        }).then(updateDisplay);
    }

    function backspace() {
        return new Promise((resolve) => {
            calculator.displayValue = calculator.displayValue.slice(0, -1) || '0';
            resolve();
        }).then(updateDisplay);
    }

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const { target } = event;
        const { value } = target;
        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                handleOperator(value);
                break;
            case '=':
                handleOperator(value);
                break;
            case '.':
                inputDecimal(value);
                break;
            case 'all-clear':
                resetCalculator();
                break;
            case 'backspace':
                backspace();
                break;
            default:
                if (Number.isInteger(parseFloat(value))) {
                    inputDigit(value);
                }
        }
    });
});