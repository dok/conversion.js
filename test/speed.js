var expect = require('chai').expect;

describe('Speed', function () {
  var convert = require('../conversion.js');
  it('Should convert from meters/sec to miles/hour', function () {
    expect(convert(1, 'mps').toMph()).to.equal(2.2369362920544025);
    
  });


});