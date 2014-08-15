var expect = require('chai').expect;

describe('Length', function () {
  var convert = require('../conversion.js');

  it('exists', function () {
    expect(convert).to.be.a('function');
  });

  it('should convert from meters to meters', function () {
    expect(convert(1, 'meters').toMeters()).to.equal(1);
    expect(convert(2, 'meters').toMeters()).to.equal(2);
  });

  it('should convert from meters to centimeters', function () {
    expect(convert(1, 'meters').toCentimeters()).to.equal(100);
    expect(convert(3, 'meters').toCentimeters()).to.equal(300);
  });

  it('should convert from meters to kilometers', function () {
    expect(convert(1, 'meters').toKilometers()).to.equal(.001);
  });

  it('should convert from meters to yards', function () {
    expect(convert(1, 'meters').toYards()).to.equal(1.0936);
  });

  it('should convert from meters to inches', function () {
    expect(convert(1, 'meters').toInches()).to.equal(39.3701);
  });

  it('should convert from yards to meters', function () {
    expect(convert(1, 'yards').toMeters()).to.equal(.9144);
  });

  it('should convert from yard to feet', function () {
    expect(convert(1, 'yards').toFeet()).to.equal(3);
  });

  it('should convert from feet to yards', function () {
    expect(convert(3, 'feet').toYards()).to.equal(1);
  });
});
