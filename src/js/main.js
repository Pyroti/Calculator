import { calculation } from './calculation';
import { memoryOperation } from './memoryOperation';
import { negativeNumber } from './negativeNumber';
import { numberEvent } from './numberEvent';

const operatr = document.querySelectorAll('.operation');
const numer = document.querySelectorAll('.num');
const result = document.querySelector('.calc__result');
const equals = document.querySelector('.equels');
const clear = document.querySelector('.clear');
const undo = document.querySelector('.undo');
const memoryButton = document.querySelectorAll('.memory-operation');
const negativeButton = document.querySelector('.negative-operation');
const singleOperators = ['%', '2x', 'x2', '3x', 'x3', 'exp', 'log', '10x', '1/x', 'ln'];
const error = 'Error. Try again';
const ac = 'AC';
const undoString = 'undo';

let operator = '';
let number1 = '';
let number2 = '';
result.value = '0';

function showResult() {

  [number1, result.value] = calculation(number1, number2, operator);
  number2 = '';

}

function clickNumber(event) {

  if (result.value === error) {

    result.value = number1;
    operator = '';

  }
  [result.value, number1, number2] = numberEvent(event, number1, number2, result.value, operator);

}

function clickOperator(event) {

  if (result.value === error) {

    result.value = number1;
    return;

  }
  const button = event.target;
  const parameter = button.dataset.value;
  if (operator !== '' && number2 !== '') {

    showResult();

  }
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

  if (result.value === error) {

    result.value = number1;
    return;

  }
  if (number2 !== '') {

    showResult();
    operator = '';

  }

}

function clickClear() {

  operator = ac;
  showResult();
  operator = '';

}

function cancel() {

  operator = undoString;
  showResult();
  operator = '';

}

function memory(event) {

  if (result.value === error) {

    result.value = number1;
    return;

  }
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

  if (result.value === error) {

    result.value = number1;
    return;

  }
  [result.value, number1, number2] = negativeNumber(result.value, operator, number1, number2);

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
