const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
let [N, ...commands] = input;
commands = commands.map((command) => command.split(' '));
let stack = [];
let results = [];
let result;

for (const command of commands) {
  if (command[0] === 'push') {
    stack.push(command[1]);
    result = null;
  } else if (command[0] === 'pop') {
    if (stack.length === 0) {
      result = -1;
    } else {
      result = stack.pop();
    }
  } else if (command[0] === 'size') {
    result = stack.length;
  } else if (command[0] === 'empty') {
    result = stack.length === 0 ? 1 : 0;
  } else if (command[0] === 'top') {
    if (stack.length === 0) {
      result = -1;
    } else {
      result = stack[stack.length - 1];
    }
  }

  if (result !== null) {
    results.push(result);
  }
}

console.log(results.join('\n'));
