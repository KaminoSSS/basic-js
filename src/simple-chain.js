const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value !== undefined) {
      chainMaker.chainArr.push(String(value));
    } else {
      chainMaker.chainArr.push('');
    }

    return this;
  },
  removeLink(position) {
    if (
      +position === +position &&
      position < this.chainArr.length &&
      position > 0
    ) {
      this.chainArr.splice(position - 1, 1);
      return this;
    } else {
      this.chainArr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const chainStr = '( ' + this.chainArr.join(' )~~( ') + ' )';
    this.chainArr = [];
    return chainStr;
  },
};

module.exports = {
  chainMaker,
};
