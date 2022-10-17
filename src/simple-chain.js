const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  finish: [],

	getLength() {
		return this.finish.length;
	},

	addLink(value) {
		let valueStr = String(value);
		if (valueStr) {
			this.finish.push(`( ${valueStr} )`);

		};
		return this;
	},

	removeLink(position) {
		console.log(typeof position)
		if (position && !isNaN(position) && typeof position !== "string" && typeof position === "number" && position > 0 && position < this.finish.length) {
			this.finish.splice(position - 1, 1)
		} else {
			this.finish = [];
			throw new Error(`You can't remove incorrect link!`)
		}
		return this;
	},

	reverseChain() {
		this.finish.reverse();

		return this;
	},

	finishChain() {
		let result = this.finish.join('~~');
		this.finish = [];

		return result;
	}
};

module.exports = {
  chainMaker
};
