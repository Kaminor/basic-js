const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let finish = [];


	function arrayCheckValue(value, valueTop, valueLeft) {
		let arrayCheck = [];
		if (matrix[valueTop - 1]) {
			if (matrix[valueTop - 1][valueLeft - 1]) { matrix[valueTop - 1][valueLeft - 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop - 1][valueLeft]) { matrix[valueTop - 1][valueLeft] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop - 1][valueLeft + 1]) { matrix[valueTop - 1][valueLeft + 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
		}

		if (matrix[valueTop][valueLeft - 1]) { matrix[valueTop][valueLeft - 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
		if (matrix[valueTop][valueLeft + 1]) { matrix[valueTop][valueLeft + 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }

		if (matrix[valueTop + 1]) {
			if (matrix[valueTop + 1][valueLeft - 1]) { matrix[valueTop + 1][valueLeft - 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop + 1][valueLeft]) { matrix[valueTop + 1][valueLeft] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop + 1][valueLeft + 1]) { matrix[valueTop + 1][valueLeft + 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
		}

		if (arrayCheck.filter(item => item === true).length === 0) {
			finish.push(0)
		} else {
			finish.push(arrayCheck.filter(item => item === true).length)
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let t = 0; t < matrix[0].length; t++) {
			arrayCheckValue(matrix[i][t], i, t)
		}
	}

	let response = [];

	if (matrix.length === 3) {
		response.push([]);
		response.push([]);
		response.push([]);
		response[0].push(finish[0])
		response[0].push(finish[1])
		response[0].push(finish[2])
		response[1].push(finish[3])
		response[1].push(finish[4])
		response[1].push(finish[5])
		response[2].push(finish[6])
		response[2].push(finish[7])
		response[2].push(finish[8])
	} else if (matrix.length === 2) {
		response.push([]);
		response.push([]);
		response[0].push(finish[0])
		response[0].push(finish[1])
		response[0].push(finish[2])
		response[1].push(finish[3])
		response[1].push(finish[4])
		response[1].push(finish[5])
	}


	return response;
}

module.exports = {
  minesweeper
};
