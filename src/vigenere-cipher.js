const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(rev = true) {
    this.reverse = rev;
    this.letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
  }

  transformStr(str, key, encrypt) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const keyArr = key.split('');
    const keyWords = [];

    let keyCount = 0;

    str.split('').forEach((elem) => {
      if (elem !== ' ') {
        keyWords.push(keyArr[keyCount % keyArr.length]);
        keyCount += 1;
      } else {
        keyWords.push(' ');
      }
    });

    let result = [];
    const countWordIndex = this.letters.length;

    str.split('').forEach((el, i) => {
      if (el.toLowerCase() !== el.toUpperCase()) {
        const elIndex = this.letters.indexOf(el.toLowerCase());
        const keyElIndex = this.letters.indexOf(keyWords[i].toLowerCase());
        let transformedIndex;

        if (encrypt) {
          transformedIndex = (elIndex + keyElIndex) % countWordIndex;
        } else {
          transformedIndex = (elIndex - keyElIndex + countWordIndex) % countWordIndex;
        }

        result.push(this.letters[transformedIndex].toUpperCase());
      } else {
        result.push(el);
      }
    });

    return this.reverse ? result.join('') : result.reverse().join('');
  }

  encrypt(str, key) {
    return this.transformStr(str, key, true);
  }

  decrypt(str, key) {
    return this.transformStr(str, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
