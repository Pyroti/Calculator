const { Calculator } = require('./receiver');

const { findOperator } = require('./findOperator');

const {
  AddCommand, DivCommand, MulCommand, SubCommand,
} = require('./command');

const buttons = document.querySelectorAll('.calc__butt');
const result = document.querySelector('.calc__result');
const equals = document.querySelector('.expr');

function calculation() {

  const calculator = new Calculator();

  // const operationStr = '4/5';
  const operator = findOperator(result.value);
  const [num1, num2] = result.value.split(operator);
  calculator.setValue(+num1);

  if (operator === '+') {

    calculator.execute(new AddCommand(+num2));

  }

  if (operator === '-') {

    calculator.execute(new SubCommand(+num2));

  }

  if (operator === '*') {

    calculator.execute(new MulCommand(+num2));

  }

  if (operator === '/') {

    calculator.execute(new DivCommand(+num2));

  }

  if (operator === 'AC') {

    calculator.setValue(0);

  }

  result.value = calculator.getCurrentValue();
  // calculator.execute(new SubCommand(24));
  // calculator.execute(new MulCommand(6));
  // calculator.execute(new DivCommand(2));

  // console.log(`\nValue: ${calculator.getCurrentValue()}`);

}

function click(event) {

  const button = event.target;
  const parameter = button.dataset.value;
  if (typeof Number(parameter) === 'number' && !Number.isNaN(parseInt(parameter, 10))) {

    result.value += parameter;

  } else if (parameter === 'AC') {

    result.value = '';

  }

}

buttons.forEach((but) => {

  but.addEventListener('mousedown', click);

});

equals.addEventListener('mousedown', calculation);
