const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let charArr = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let addressArr = n.split('-');
  if (addressArr.length !== 6) {
    return false;
  }
  for (let i = 0; i < addressArr.length; i++) {
    if (addressArr[i].length !== 2) {
      return false;
    }
    if (
      !charArr.includes(addressArr[i][0]) ||
      !charArr.includes(addressArr[i][1])
    ) {
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address,
};
