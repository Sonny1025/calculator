const resultInput = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    currentInput += buttonText;
    resultInput.value = currentInput;
  });
});

document.querySelector('.equal').addEventListener('click', () => {
  const result = eval(currentInput);
  resultInput.value = result;
  currentInput = '';
});
