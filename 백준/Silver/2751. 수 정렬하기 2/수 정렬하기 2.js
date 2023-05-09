const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

let [N, ...numbers] = input.map(Number);
numbers = numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));
