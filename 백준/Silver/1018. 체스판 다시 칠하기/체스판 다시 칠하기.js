const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let [size, ...board] = input;
const [row, col] = size.split(' ').map(Number);
board = board.map((line) => line.split(''));

let pattern = ['BW'.repeat(4), 'WB'.repeat(4)];
// console.log(pattern);
let results = [];

for (let y = 0; y <= row - 8; y++) {
  for (let x = 0; x <= col - 8; x++) {
    for (let repeat = 0; repeat < 2; repeat++) {
      let cnt = 0;

      for (let i = y; i < y + 8; i++) {
        let patternIdx = (i + repeat) % 2;
        for (let j = x; j < x + 8; j++) {
          if (board[i][j] !== pattern[patternIdx][j - x]) {
            cnt++;
          }
        }
      }
      results.push(cnt);
    }
  }
}

// console.log(results);
console.log(Math.min(...results));
