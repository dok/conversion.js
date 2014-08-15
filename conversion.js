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
      conversions = [],
      helpers = {};

      conversions.push({ // TEMPERATURE based in celsius
        'celsius': 1.0,
        'fahrenheit': -17.7778,
        'kelvin': -273.15
      });
      conversions.push({ // LENGTH based in meter
        'kilometer': 1000.0,
        'meter': 1.0,
        'centimeter': 0.01,
        'millimeter': 0.001,
        'mile': 1609.34,
        'yard': 0.9144,
        'inch': 0.0254,
        'foot': 0.3048,
        'feet': 0.3048,
        'nautical-mile': 1852
      });
      conversions.push({  // MASS based in kilogram
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
      });
      conversions.push({ // SPEED based in meters/sec
        'mph': 0.44704,
        'fps': 0.3048,
        'mps': 1,
        'kph': 0.277778,
        'knot': 0.514444
      });

  var initialize = function() {
    buildLengthFunctions();
  };

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

  /**
   * Holy mother of function builders
   * @return {undefined}
   */
  var buildLengthFunctions = function() {
    var obj = {};
    var isSpeed;
    for(var i = 0; i < conversions.length; i++) {
      for(var item in conversions[i]) {
        if(i === 3) {
          isSpeed = true;
        } else {
          isSpeed = false;
        }
        var methodName = helpers.makeMethodName(item, isSpeed);
        Conversion.prototype[methodName] = function() {
          var name = item;
          var topicIndex = i;
          return function() {
            return Number((this.value * conversions[topicIndex][this.suffix] / conversions[topicIndex][name]).toFixed(4));
          }
        }();
      }
    }
  };

  /**
   * Helpers
   */

   /**
    * Normalize the suffix
    * @param  {[string]} suffix [the suffix to be normalized]
    * @return {[string]}        [returns the LENGTH table compatible string]
    */
  helpers.normalize = function (suffix) {
    if(suffix.length < 4) {
      return suffix.toLowerCase();
    }
    return suffix.toLowerCase().replace(/s$/i, '');
  };

  helpers.handleUnique = function(original) {
    if(original === 'foot') {
      return 'toFeet';
    } else {
      return false;
    }
  }

  /**
   * Most nouns can be made plural by adding an -s to the end of the word. However, there are times when you need to add -es instead. If the word ends in "s", "x", "ch", or "sh", then you must use -es in order to spell the word correctly.
   */
  helpers.makeMethodName = function (original, isSpeed) {
    var items = original.split('-');
    var name = 'to';
    var edgeCases = [['s', 'x'],['ch', 'sh']];

    var isUnique = helpers.handleUnique(original);
    if(isUnique) {
      return isUnique;
    }

    items.forEach(function(value) {
      name += value[0].toUpperCase() + value.substring(1);
    });

    //TODO: Foot to Feet
    if (isSpeed) {
      return name;
    } else {
      if(~edgeCases[0].indexOf(name.slice(-1)) || ~edgeCases[1].indexOf(name.slice(-2))) {
        return name += 'es';
      } else {
        return name += 's';
      }
    }
  };

  initialize();

  // CommonJS module is defined
  if (hasModule) {
    module.exports = conversion;
  } else {
    window.convert = conversion;
  }
})();