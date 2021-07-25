import { hasPoint } from './hasPoint';

const zero = '0';

function numberEvent(event, number1, number2, result, operator) {

  const button = event.target;
  const parameter = button.dataset.value;
  const isNumber = (typeof Number(parameter) === 'number');
  const isNan = Number.isNaN(parseInt(parameter, 10));
  let num1 = number1;
  let num2 = number2;
  let res = result;
  [res, num1, num2] = hasPoint(num1, num2, parameter, res, operator);

  if (isNumber && !isNan && operator === '') {

    if (res === zero) {

      res = '';

    }
    num1 += parameter;
    res += parameter;

  } else if (isNumber && !isNan && operator !== '') {

    num2 += parameter;
    res += parameter;

  }
  return [res, num1, num2];

}

export { numberEvent };

