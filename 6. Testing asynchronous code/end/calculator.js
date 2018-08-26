/**
 * Calculator function constructor.
 * @constructor
 */
function Calculator() {
  this.total = 0;
}

/**
 * Adds value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.add = function (number) {
  return this.total += number;
};

/**
 * Subtracts number from current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.subtract = function (number) {
  return this.total -= number;
};

/**
 * Multiplies value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.multiply = function (number) {
  return this.total *= number;
};

/**
 * Divides value to current total.
 *
 * @param {number} number
 * @returns {*}
 */
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new Error('Cannot divide by zero');
  }

  return this.total /= number;
};

/**
 * Getter that returns calculator version.
 */
Object.defineProperty(Calculator.prototype, 'version', {
  get: function () {
    return fetch('https://gist.githubusercontent.com/juanlizarazo/4b2d229ba483ca13b1a6d7bf3079dc8b/raw/228ac05e04118037be02c38d9b86945c1356a2e2/version.json')
      .then(function (result) {
        return result.json()
      })
      .then(function (json) {
        return json.version;
      });
  },
  enumerable: true,
  configurable: true
});
