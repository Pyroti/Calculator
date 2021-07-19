import { calculation } from './calculation';
import { memoryOperation } from './memoryOperation';

const operatr = document.querySelectorAll('.operation');
const numer = document.querySelectorAll('.num');
const result = document.querySelector('.calc__result');
const equals = document.querySelector('.calc__butt-equels');
const clear = document.querySelector('.clear');
const undo = document.querySelector('.undo');
const memoryButton = document.querySelectorAll('.memory-operation');
const negativeButton = document.querySelector('.negative-operation');
const singleOperators = ['%', '2x', 'x2', '3x', 'x3', 'exp', 'log', '10x', '1/x', 'ln'];

let operator = '';
let number1 = '';
let number2 = '';

function showResult() {

  number1 = calculation(number1, number2, operator);
  number2 = '';
  result.value = number1;

}

function hasPoint(parameter) {

  const ipPoint = parameter === '.';
  const isFirstNumber = operator === '';
  const isHasPoint1 = number1.indexOf('.') === -1;
  const isHasPoint2 = number2.indexOf('.') === -1;
  if (ipPoint && isFirstNumber && isHasPoint1) {

    number1 += '.';
    result.value += '.';

  } else if (ipPoint && !isFirstNumber && isHasPoint2) {

    const isEmpty = number2 === '' ? '0.' : '.';
    number2 += isEmpty;
    result.value += isEmpty;

  }

}

function clickNumber(event) {

  const button = event.target;
  const parameter = button.dataset.value;
  const isNumber = (typeof Number(parameter) === 'number');
  const isNan = Number.isNaN(parseInt(parameter, 10));
  const zero = '0';

  hasPoint(parameter);

  if (isNumber && !isNan && operator === '') {

    // console.log('клик по первому числу');
    if (result.value === zero) {

      result.value = '';

    }
    number1 += parameter;
    result.value += parameter;

  } else if (isNumber && !isNan && operator !== '') {

    // console.log('клик по второму числу');
    number2 += parameter;
    result.value += parameter;

  }

}

function clickOperator(event) {

  const button = event.target;
  const parameter = button.dataset.value;
  if (operator !== '' && number2 !== '') {

    // console.log('нажали на второй оператор');
    showResult();

  }
  // console.log('нажали оператор');
  if (operator !== '' && number2 === '') {

    result.value = result.value.replace(operator, '');

  }
  operator = parameter;
  result.value += parameter;
  if (singleOperators.includes(operator)) {

    showResult();

  }

}

function clickEquels() {

  if (number2 !== '') {

    showResult();
    operator = '';

  }

}

function clickClear() {

  operator = 'AC';
  showResult();
  operator = '';

}

function cancel() {

  operator = 'undo';
  showResult();
  operator = '';

}

function memory(event) {

  if (number2 !== '') {

    showResult();

  }
  const [value, flag] = memoryOperation(event, number1);
  if (flag === true) {

    result.value = value;
    number1 = `${value}`;

  }

}

function negative() {

  const isFirstNumber = operator === '';
  const isSingleOperators = singleOperators.includes(operator);
  const isNumber2Empty = number2 === '';
  if (isFirstNumber || isSingleOperators) {

    // console.log('клик по первому числу');
    number1 = `${Number(number1) * -1}`;
    result.value = number1;

  } else if (!isFirstNumber && !isSingleOperators && !isNumber2Empty) {

    // console.log('клик по второму числу');
    number2 = `${Number(number2) * -1}`;
    if (Number(number2) <= 0) {

      result.value = `${number1}${operator}(${number2})`;

    } else {

      result.value = `${number1}${operator}${number2}`;

    }

  }

}

operatr.forEach((but) => {

  but.addEventListener('mousedown', clickOperator);

});

numer.forEach((but) => {

  but.addEventListener('mousedown', clickNumber);

});

memoryButton.forEach((but) => {

  but.addEventListener('mousedown', memory);

});

negativeButton.addEventListener('mousedown', negative);
equals.addEventListener('mousedown', clickEquels);
clear.addEventListener('mousedown', clickClear);
undo.addEventListener('mousedown', cancel);
