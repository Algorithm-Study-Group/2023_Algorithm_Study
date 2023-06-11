let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [sub, scores] = fs.readFileSync(filePath).toString().trim().split('\n');
let score = scores.split(" ").map(Number).sort((a,b) => b-a);
const m = score[0];
score = score.map(n => n/m*100);
let sum = score.reduce((pre,cur) => pre+cur,0);

console.log(parseFloat(sum/Number(sub)));
