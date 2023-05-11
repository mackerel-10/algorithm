const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = Number(input);
const NLength = input.length;
const startNumber = N > 18 ? N - 9 * NLength : 1;
let [num, sum] = [0, 0];

for (let i = startNumber; i < N; i++) {
  num = i;
  sum = 0;

  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  if (sum + i === N) {
    console.log(i);
    return;
  }
}

console.log(0);
return;
