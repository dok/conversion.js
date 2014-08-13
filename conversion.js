/**
 * Conversion.js
 * version: 0.0.1
 * authors: Sean Dokko
 * License: MIT
 * dokko1230.github.io/conversion.js
 */
!(function (undefined) {
  'use strict';

  var conversion,
      VERSION = '0.0.1',
      hasModule = (typeof module !== 'undefined' && module.exports),
      TEMPERATURE = { // based in celsius
        'celsius': 1.0,
        'fahrenheit': -17.7778,
        'kelvin': -273.15
      },
      LENGTH = { // based in meter
        'kilometer': 1000.0,
        'meter': 1.0,
        'centimeter': 0.01,
        'millimeter': 0.001,
        'mile': 1609.34,
        'yard': 0.9144,
        'inch': 0.0254,
        'foot': 0.3048,
        'nautical-mile': 1852
      },
      MASS = {  // based in kilogram
        'metric-ton': 1000,
        'kilogram': 1,
        'gram': 0.001,
        'milligram': 0.000001,
        'mcg': 0.000000001,
        'long-ton': 1016.05,
        'short-ton': 907.185,
        'stone': 6.35029,
        'pound': 0.453592,
        'ounce': 0.0283495
      },
      SPEED = { // based in meters/sec
        'miles-per-hour': 0.44704,
        'feet-per-second': 0.3048,
        'meters-per-second': 1,
        'kilometers-per-hour': 0.277778,
        'knot': 0.514444
      },
      helpers = {};

  /**
   * Non-pseudoclassical instantiation of conversion
   * @param {[integer]} value  [the value that is being converted]
   * @param {[string]} suffix [the suffix that is attached to the value. eg. 'km']
   */
  conversion = function (value, suffix) {
    var config = {};
    config.value = value;
    config.suffix = helpers.normalize(suffix);
    
    return new Conversion(config);
  };

  function Conversion(configs) {
    for (var key in configs) {
      this[key] = configs[key];
    }
  }

  !(function() {
    var obj = {};
    for(var item in LENGTH) {
      console.log(item, LENGTH[item]);
      var methodName = 'to' + item[0].toUpperCase() + item.substring(1) + 's';
      Conversion.prototype[methodName] = function() {
        var name = item;
        return function() {
          return this.value * LENGTH[this.suffix] / LENGTH[name];
        }
      }();
    }
  })();

  // Conversion.prototype.toMeters = function () {
  //   return this.value * LENGTH[this.suffix] / LENGTH.meter;
  // };

  // Conversion.prototype.toCentimeters = function () {
  //   return this.value * LENGTH[this.suffix] / LENGTH.centimeter;
  // };

  // Conversion.prototype.toKilometers = function () {
  //   return this.value * LENGTH[this.suffix] / LENGTH.kilometer;
  // };

  /**
   * Helpers
   */

   /**
    * Normalize the suffix
    * @param  {[string]} suffix [the suffix to be normalized]
    * @return {[string]}        [returns the LENGTH table compatible string]
    */
   helpers.normalize = function(suffix) {
    return suffix.toLowerCase().replace(/s$/i, '');
   };

  // CommonJS module is defined
  if (hasModule) {
    module.exports = conversion;
  }
})();