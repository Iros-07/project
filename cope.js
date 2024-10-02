const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent in operators) {
            operator = button.textContent;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += button.textContent;
        }
        result.value = currentNumber;
    });
});

function calculate() {
    let resultValue;
    switch (operator) {
        case '+':
            resultValue = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            resultValue = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            resultValue = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            resultValue = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    currentNumber = resultValue;
    previousNumber = '';
    operator = '';
    result.value = currentNumber;
}

const operators = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
};

const button = document.getElementById('h2')

button.addEventListener('mouseover',() => {
    button.style.backgroundColor='#0a0122';
});
button.addEventListener('mouseout',() => {
    button.style.backgroundColor='#1e0161';
});
button.addEventListener('mousedown',() => {
    button.style.backgroundColor='#2d00f3';
});
button.addEventListener('mouseup',() => {
    button.style.backgroundColor='#1e0161';
});
