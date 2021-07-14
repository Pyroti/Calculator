export function findOperator(str) {

  const massStr = str.split('');
  return massStr.map((value) => {

    if (typeof Number(value) === 'number' && !Number.isNaN(parseInt(value, 10))) {

      return '';

    }

    return value;

  }).join('');

}
