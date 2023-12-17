const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  let remporalArr = arr.slice(0);
  for (let i = 0; i < remporalArr.length; i++) {
    const currEl = remporalArr[i];
    if (currEl === '--double-next') {
      if (arr[i + 1]) {
        result.push(remporalArr[i + 1]);
      }
    } else if (currEl === '--discard-prev') {
      if (remporalArr[i - 2] !== '--discard-next') {
        result.pop();
      }
    } else if (currEl === '--double-prev') {
      if (remporalArr[i - 2] !== '--discard-next') {
        if (result.length > 0) {
          result.push(result[result.length - 1]);
        }
      }
    } else if (currEl === '--discard-next') {
      remporalArr[i + 1] = remporalArr[i + 1] + 'fonk';
    } else if (!currEl.toString().endsWith('fonk')) {
      result.push(currEl);
    }
  }
  return result;
}

module.exports = {
  transform,
};
