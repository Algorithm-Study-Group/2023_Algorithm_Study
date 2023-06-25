let input = require('fs').readFileSync('/dev/stdin').toString();

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let answer = 0;

for (let i = 0; croatian.length; i++){
  while (input != input.replace(croatian[i], ' ')){
    answer += 1;
    input = input.replace(croatian[i], '')
  }
}

console.log(answer);