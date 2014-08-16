var expect = require('chai').expect;

describe('Configs', function () {
  var convert = require('../conversion.js');
  it('Should override default precision', function () {
    expect(convert(1, 'meters', { precision: 1 }).toInches()).to.equal(39.4);
  });
});