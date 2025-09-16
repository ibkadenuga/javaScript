const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'RESET') {
      currentInput = '';
      previousInput = '';
      operator = '';
      screen.value = '';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      screen.value = currentInput;
    } else if (value === '=') {
      if (previousInput && operator && currentInput) {
        const result = calculate(previousInput, currentInput, operator);
        screen.value = result;
        currentInput = result.toString();
        previousInput = '';
        operator = '';
      }
    } else if (['+', '-', 'x', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case 'x': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return 'Error';
  }
}