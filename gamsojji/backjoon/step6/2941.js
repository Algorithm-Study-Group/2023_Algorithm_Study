let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
let cb = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

cb.forEach((b, idx) => {
    input = input.split(b).join("t");
})

console.log(input.length);