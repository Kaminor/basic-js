const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let value = ''

	if (!members || members.length === 0 ||members === 'null' || members === 'undefined' || members === 'false') {
		return false;
	}

	for (let i = 0; i < members.length; i++) {



		if (typeof members[i] === 'string') {
			let element = members[i].trim();
			value += element[0].toUpperCase();
		}
	}
	return value.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
