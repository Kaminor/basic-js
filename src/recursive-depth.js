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
  calculateDepth(arr) {
    let depth = 1;
		let newDepth = 1;

		for (let i = 0; i < arr.length; i++) {
			depth = 1;
			if (Array.isArray(arr[i])) {
				depth += this.calculateDepth(arr[i]) ;
			}
	
			if (newDepth < depth) {
				newDepth = depth;
			}
		}
		return newDepth;
  }
}

module.exports = {
  DepthCalculator
};
