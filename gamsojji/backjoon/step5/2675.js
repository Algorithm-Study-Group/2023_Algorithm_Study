let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";

input.forEach(line => {
    let [n, str] = line.split(" ");
    if(str == undefined) return;
    str.split("").forEach(s => {
        for (let i = 0; i < n; i++) {
            result += s;
        }
    })
    result+="\n"
})
console.log(result);