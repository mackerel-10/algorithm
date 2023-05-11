const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);
const max = cards.length;
let closestSum = 0;
let sum;

for (let i = 0; i < max; i++) {
  for (let j = i + 1; j < max; j++) {
    for (let k = j + 1; k < max; k++) {
      sum = cards[i] + cards[j] + cards[k];

      if (sum <= M && M - sum < M - closestSum) {
        closestSum = sum;
      }
    }
  }
}

console.log(closestSum);
