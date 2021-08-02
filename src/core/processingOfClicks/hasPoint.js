function hasPoint(number1, number2, parameter, result, operator) {

  let num1 = number1;
  let num2 = number2;
  let res = result;
  const ipPoint = parameter === '.';
  const isFirstNumber = operator === '';
  const isHasPoint1 = number1.indexOf('.') === -1;
  const isHasPoint2 = number2.indexOf('.') === -1;
  if (ipPoint && isFirstNumber && isHasPoint1) {

    num1 += '.';
    res += '.';

  } else if (ipPoint && !isFirstNumber && isHasPoint2) {

    const isEmpty = number2 === '' ? '0.' : '.';
    num2 += isEmpty;
    res += isEmpty;

  }

  return [res, num1, num2];

}

export { hasPoint };

