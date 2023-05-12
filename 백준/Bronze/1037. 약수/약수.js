const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
/* const input = '6\n\
3 4 2 12 6 8\
'
  .trim()
  .split('\n'); */

const N = Number(input.shift());
let aliquots = input.shift().split(' ').map(Number);

aliquots.sort((a, b) => a - b);

const result = aliquots[0] * aliquots[aliquots.length - 1];
console.log(result);
