const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
