var assert = require('assert');
var expect = require('expect');

describe('The tests for units of space', function () {
  before(function () {
    var convert = require('conversion.js');
  });

  it('exists', function () {
    expect(convert).to.be.a('function');
  });
});