const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
/* const input = '20\n\
7\n\
23\n\
19\n\
10\n\
15\n\
25\n\
8\n\
13\n\
'
  .trim()
  .split('\n'); */

let heights = input.map(Number).sort((a, b) => a - b);
const margin = heights.reduce((sum, current) => (sum += current), 0) - 100;

let idx1, idx2;
for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (heights[i] + heights[j] === margin) {
      // heights.splice(i, 1);
      // heights.splice(j - 1, 1);
      [idx1, idx2] = [i, j];

      break;
    }
  }
}

for (let i = 0; i < 9; i++) {
  if (i !== idx1 && i !== idx2) console.log(heights[i]);
}

// console.log(heights.join('\n'));
