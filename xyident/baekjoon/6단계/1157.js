let input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let i = 0; i < 26; i++) {
  if (result[i] === max && index != i) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));