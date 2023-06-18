let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.forEach(n => {
    if(isNaN(Number(n))) console.log(n[0]+n[n.length-1]);
});
