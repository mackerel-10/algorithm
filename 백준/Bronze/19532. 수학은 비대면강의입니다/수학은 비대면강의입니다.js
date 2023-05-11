const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ');

const [a, b, c, d, e, f] = input.map(Number);
// console.log(a, b, c, d, e, f);

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x + ' ' + y);
      break;
    }
  }
}
