const chai = require('chai');
// import chai from 'chai';
// import { calculation } from '../assets/js/calculation';
const calculation = require('../assets/js/calculation');

const { assert } = chai;

describe('Calculater', () => {

  it('Calculater should return 5 + 5', () => {

    const result = calculation('5', '5', '+');
    assert.equal(result, '10');

  });

});
/*
describe('Array', () => {

  describe('#indexOf()', () => {

    it('should return -1 when the value is not present', () => {

      assert.equal([1, 2, 3].indexOf(4), -1);

    });

  });

});
*/
