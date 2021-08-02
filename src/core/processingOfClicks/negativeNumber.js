import { singleOperators } from '../constants/singleOperators.js';

function negativeNumber(result, operator, number1, number2) {

  let res;
  let num1;
  let num2;
  const isFirstNumber = operator === '';
  const isSingleOperators = singleOperators.includes(operator);
  const isNumber2Empty = number2 === '';
  if (isFirstNumber || isSingleOperators) {

    num1 = `${Number(number1) * -1}`;
    res = num1;
    return [res, num1, number2];

  }
  if (!isFirstNumber && !isSingleOperators && !isNumber2Empty) {

    num2 = `${Number(number2) * -1}`;
    if (Number(num2) <= 0) {

      res = `${number1}${operator}(${num2})`;
      return [res, number1, num2];

    }

    res = `${number1}${operator}${num2}`;
    return [res, number1, num2];


  }
  return [result, number1, number2];

}

export { negativeNumber };

