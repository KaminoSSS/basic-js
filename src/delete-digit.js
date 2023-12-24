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
  let result = 0;
  for (let i = 0; i < n.toString().length; i++) {
    const currNumbArr = n.toString().split('');
    currNumbArr.splice(i, 1);
    const currNumb = +currNumbArr.join('');
    if (currNumb > result) result = currNumb;
  }
  return result;
}

module.exports = {
  deleteDigit,
};
