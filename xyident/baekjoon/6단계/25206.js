let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let score = 0;
let time = 0;

for(let i = 0; i < input.length; i++){
  let line = input[i].split(" ");

  let grade = line[2];

  switch(grade){
    case 'A+': score += 4.5 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'A0': score += 4.0 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'B+': score += 3.5 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'B0': score += 3.0 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'C+': score += 2.5 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'C0': score += 2.0 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'D+': score += 1.5 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'D0': score += 1.0 * parseInt(line[1]); time += parseInt(line[1]); break;
    case 'F': score += 0.0; time += parseInt(line[1]); break;
    case 'P': break;
  }
}

console.log(score/time);