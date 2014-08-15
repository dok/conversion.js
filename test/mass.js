var expect = require('chai').expect;

describe('Mass', function () {
  var convert = require('../conversion.js');

  it('Should convert from kilograms to metric-tons', function () {
    expect(convert(1, 'kilograms').toMetricTons()).to.equal(0.001);
    expect(convert(2, 'kilograms').toMetricTons()).to.equal(0.002);
  });

  it('Should convert from kilograms to gram', function () {
    expect(convert(1, 'kilograms').toGrams()).to.equal(1000);
    expect(convert(2, 'kilograms').toGrams()).to.equal(2000);
  });

  it('Should convert from grams to kilograms', function () {
    expect(convert(1, 'grams').toKilograms()).to.equal(0.001);
  });
  
});