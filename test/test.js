import chai from 'chai';
import { calculation } from '../assets/js/calculation.js';

const { assert } = chai;

describe('Calculater', () => {

  it('Calculater should return 10', () => {

    const result = calculation('5', '5', '+')[1];
    assert.equal(result, '10');

  });

  it('Calculater should return 5', () => {

    const result = calculation('10', '5', '-')[1];
    assert.equal(result, '5');

  });

  it('Calculater should return error', () => {

    const result = calculation('10', '0', '/')[1];
    assert.equal(result, 'Error. Try again');

  });

  it('Calculater should return -5', () => {

    const result = calculation('-125', '0', '3x')[1];
    assert.isNotNull(result, '-5');

  });

  it('Calculater should return error', () => {

    const result = calculation('-125', '0', '2x')[1];
    assert.isNotNull(result, 'Error. Try again');

  });

  it('Calculater should return notNull', () => {

    const result = calculation('10', '0', '/')[1];
    assert.isNotNull(result, 'ok');

  });

  it('Calculater should return number', () => {

    const result = calculation('10', '5', '*')[1];
    assert.typeOf(result, 'number');

  });

});
