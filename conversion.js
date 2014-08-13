!(function () {
  'use strict';
  /**
   * Non-pseudoclassical instantiation of Conversion
   * @param {[integer]} value  [the value that is being converted]
   * @param {[string]} suffix [the suffix that is attached to the value. eg. 'km']
   */
  var Conversion = function (value, suffix) {
    var instance = {};
    instance.value = value;
    instance.suffix = suffix;
    instance.factors = {
      'kilometer': 0.0001,
      'meter': 1.0,
      'centimeter': 100.0,
      'yard': 0.9144,
      'inch': 0.0254,
      'foot': 0.3048
    };
    return instance;
  };

  Conversion.prototpye.toMeters = function () {
    return this.value * this.factors[this.suffix] / this.factors.meter;
  };

  Conversion.prototpye.toCentimeters = function () {
    return this.value * this.factors[this.suffix] / this.factors.centimeter;
  };

  Conversion.prototpye.toKilometers = function () {
    return this.value * this.factors[this.suffix] / this.factors.kilometer;
  };

  return Conversion;
})();