import chai from 'chai';
import { memoryOperation } from '../src/core/computation/memoryOperation.js';

const { assert } = chai;

describe('Memory operation', () => {

  it('Memory should return 5', () => {

    const result = memoryOperation('m+', '5')[0];
    assert.equal(result, '5');

  });

  it('Memory should return 10', () => {

    const result = memoryOperation('m+', '5')[0];
    assert.equal(result, '10');

  });

  it('Memory should return 2', () => {

    const result = memoryOperation('m-', '8')[0];
    assert.equal(result, '2');

  });

  it('Memory should return 0', () => {

    const result = memoryOperation('mc', '7')[0];
    assert.equal(result, '0');

  });

  it('Memory should return 0', () => {

    const result = memoryOperation('m+', '5')[0];
    assert.equal(result, '5');

  });

  it('Memory should return 5', () => {

    const result = memoryOperation('mr', '5')[0];
    assert.equal(result, '5');

  });

});
