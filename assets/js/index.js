const buttons = document.querySelectorAll('.calc__butt');
const result = document.querySelector('.calc__result');
let expression = '';

function calculation(event) {

  const button = event.target;
  const parameter = button.dataset.value;
  if (typeof Number(parameter) === 'number' && !Number.isNaN(parseInt(parameter, 10))) {

    result.value += parameter;
    expression += parameter;

  } else if (parameter === '-' || parameter === '+' || parameter === '/' || parameter === '*') {

    result.value += parameter;
    expression += parameter;

  } else if (parameter === '=') {

    expression = expression === '' ? 0 : expression;
    // result.value = eval(expression);
    expression = result.value;

  } else if (parameter === 'AC') {

    result.value = '';
    expression = '';

  }
  return 0;

}

buttons.forEach((but) => {

  but.addEventListener('mousedown', calculation);

});
