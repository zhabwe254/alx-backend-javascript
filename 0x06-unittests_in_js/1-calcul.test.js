const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two numbers', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return an error if the divisor is zero', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
