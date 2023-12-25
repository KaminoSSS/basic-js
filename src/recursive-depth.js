const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	constructor() {
    this.depth = 1;
  }
  calculateDepth(arr) {
    if (arr.every((el) => !Array.isArray(el))) {
      return 1;
    } else {
      this.depth = this.depth + this.calculateDepth(arr.flat());
    }
    const result = this.depth;
    this.depth = 1;
    return result;
  }
}

module.exports = {
  DepthCalculator
};
