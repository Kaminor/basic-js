const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return ''
  }
  
    let array = str;
    let uniqueValue = [];
    uniqueValue.push(array[0])
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i - 1]) {
        uniqueValue.push(array[i])
      }
    }
  
    let arraySecond = [];
  
    for (let i = 0; i < uniqueValue.length; i++) {
      arraySecond.push([])
    }
  
    for (let i = 0; i < uniqueValue.length; i++) {
      for (let n = 0; n < str.length; n++) {
        if (uniqueValue[i] === str[n]) {
          arraySecond[i].push(str[n])
        } else {
          str = str.slice(n)
          break
        }
      }
    }
  
    let result = '';
  
    for (let i = 0; i < arraySecond.length; i++) {
      if (arraySecond[i].length !== 1 ) {
      result += arraySecond[i].length + arraySecond[i][0]
      } else {
        result +=  arraySecond[i][0]
      }
    }
  
    return result;
}

module.exports = {
  encodeLine
};
