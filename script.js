let display = document.getElementById('display');
let currentOperand = '';

function appendToDisplay(value) {
    currentOperand += value;
    display.value = currentOperand;
}

function clearDisplay() {
    currentOperand = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(currentOperand);
        display.value = result;
        currentOperand = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentOperand = '';
    }
}
