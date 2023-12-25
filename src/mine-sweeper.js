const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixArr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let rowArr= [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      let current = 0;
      if (matrix[i][j] === true) {
        current = 1;
      } else {
        for (let x = -1; x <= 1; x += 1) {
          for (let y = -1; y <= 1; y += 1) {
            if (x === 0 && y === 0) continue;
            const row = i + x;
            const column = j + y;
            if (matrix[row] && matrix[row][column]) {
              current += 1;
            }
          }
        }
      }
      rowArr.push(current);
    }
    matrixArr.push(rowArr);
  }
  return matrixArr;
}

module.exports = {
  minesweeper,
};
