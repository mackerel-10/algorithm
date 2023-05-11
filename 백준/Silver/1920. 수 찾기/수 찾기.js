const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [N, M] = [Number(input[0]), Number(input[2])];
let A = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let numbers = input[3].split(' ').map(Number);

let results = [];

numbers.forEach((number) => {
  let left = 0;
  let right = N - 1;
  let result = 0;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (number === A[mid]) {
      result = 1;
      break;
    } else if (number < A[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  results.push(result);
});

console.log(results.join('\n'));
