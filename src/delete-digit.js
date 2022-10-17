const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newString = n.toString();
	let newNumber = newString.slice(1);;

	if (newString.length <= 2) {
		newNumber > newString[1] ? +newNumber : +newString[1];
	}

	for (let i = 1; i < newString.length; i++) {
		let prev = newString.slice(0, i) + newString.slice(i + 1);

		if (newNumber < prev) {
			newNumber = prev;
		}
	}
	return +newNumber;
}

module.exports = {
  deleteDigit
};
