let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const cases = Number(input[0]);
let answer = 0;

for (let i = 1; i <= cases; i++) {
  const word = input[i];
  const letter = [];
  
  let GWord = true;

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        GWord = false;
        break;
      }
    }
  }

  if (GWord) {
    answer += 1;
  }
}

console.log(answer);