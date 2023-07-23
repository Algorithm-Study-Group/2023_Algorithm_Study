let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();   // 0 0 0 값 제거

const result = []

for(let el of input) {
  const input = el.split(' ').map(Number);
  input.sort((a, b) => a - b);

  if(input[0] + input[1] <= input[2]) {
    result.push('Invalid');
    continue;
  }

  const set = new Set(input);   // 같은 값은 하나만 저장되는 집합의 성질 이용

  if(set.size === 1) {
    result.push('Equilateral');
  } else if(set.size === 2) {
    result.push('Isosceles');
  } else {
    result.push('Scalene');
  } 
}

console.log(result.join('\n'));