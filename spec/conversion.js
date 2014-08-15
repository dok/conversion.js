/* global conversion, describe, it, expect, should */

describe('conversion()', function () {
  'use strict';

  it('exists', function () {
    expect(convert).to.be.a('function');

  });

  it('does something', function () {
    expect(convert(1, 'meters').toFeet()).to.equal(3.2808);
  });

  // Add more assertions here
});
