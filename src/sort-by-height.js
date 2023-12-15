const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let numberOfOne = [];
  let temporalArr = [];
  let result = [];
  arr.forEach((el, index) => {
    if (el === -1) {
      numberOfOne.push(index);
    } else {
      temporalArr.push(el);
    }
  });
  temporalArr.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (numberOfOne.includes(i)) {
      result.push(-1);
    } else {
      result.push(temporalArr[counter]);
      counter++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
