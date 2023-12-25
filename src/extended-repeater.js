const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const sep = options.separator ?? '+';
  const repTimes = options.repeatTimes || 1;
  const addition = options.addition === undefined ? '' : `${options.addition}`;
  const additionSep = options.additionSeparator ?? '|';
  const additionReptTimes = options.additionRepeatTimes || 1;

  const additionResult = new Array(additionReptTimes)
    .fill(addition)
    .join(additionSep);
  const result = new Array(repTimes).fill(str + additionResult).join(sep);

  return result;
}

module.exports = {
  repeater,
};
