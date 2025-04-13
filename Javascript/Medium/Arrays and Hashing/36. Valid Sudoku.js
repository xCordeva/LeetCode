/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let boxSet = Array.from({ length: 9 }, () => new Set());
  let rowSet = Array.from({ length: 9 }, () => new Set());
  let colSet = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];

      if (num !== ".") {
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (
          rowSet[i].has(num) ||
          colSet[j].has(num) ||
          boxSet[boxIndex].has(num)
        ) {
          return false;
        }
        rowSet[i].add(num);
        colSet[j].add(num);
        boxSet[boxIndex].add(num);
      }
    }
  }
  return true;
};
