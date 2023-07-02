let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().toUpperCase().split("");
let alpha = new Array(26).fill(0);
let a = "A".charCodeAt(0);
input.forEach(al => {
    alpha[al.charCodeAt(0)-a]++;
})
let maxCnt = Math.max(...alpha);
console.log(alpha.indexOf(maxCnt) == alpha.lastIndexOf(maxCnt)?String.fromCharCode(alpha.indexOf(maxCnt)+a):"?");