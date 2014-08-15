var expect = require('chai').expect;

describe('Speed', function () {
  var convert = require('../conversion.js');
  it('Should convert from mps to mph', function () {
    expect(convert(1, 'mps').toMph()).to.equal(2.2369);
  });

  it('should convert from mph to kph', function () {
    expect(convert(1, 'mph').toKph()).to.equal(1.6093);
  });


});