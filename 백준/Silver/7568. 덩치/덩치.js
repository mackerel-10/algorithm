const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
let [N, ...people] = input;
people = people.map((value) => value.split(' ').map(Number));
let personA, personB, grade;
let grades = [];

// (xkg, ycm)
// console.log(N, people);

for (let i = 0; i < people.length; i++) {
  grade = 1;
  for (let j = 0; j < people.length; j++) {
    if (j !== i) {
      personA = people[i];
      personB = people[j];

      if (personA[0] < personB[0] && personA[1] < personB[1]) {
        grade += 1;
      }
    }
  }
  grades.push(grade);
}

console.log(grades.join(' '));
