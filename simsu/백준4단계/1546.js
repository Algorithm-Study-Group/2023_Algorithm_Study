const fs = require('fs');
let score = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ');
let max_score = Math.max(...score);
let new_sum = score.reduce((acc, cur) => acc + Number(cur)/max_score*100, 0);
console.log(new_sum/score.length);
