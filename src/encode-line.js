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
  arr = str.split('');
  let result = '';
  let currSimbLength = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currSimbLength++;
    } else {
      if (currSimbLength === 1) {
        result += arr[i];
      } else {
        result += `${currSimbLength}${arr[i]}`;
        currSimbLength = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
