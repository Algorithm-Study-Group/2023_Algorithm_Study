let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let credit = {
    "A+": 4.5, 
    "A0": 4.0, 
    "B+": 3.5, 
    "B0": 3.0, 
    "C+": 2.5, 
    "C0": 2.0, 
    "D+": 1.5, 
    "D0": 1.0, 
    "F": 0.0, 
}
let tot = 0;
let arr = []
input.forEach(sub => {
    [ti, sco, cre] = sub.split(" ");
    if(cre != "P"){
        tot += parseInt(sco);
        arr.push(parseInt(sco)*Number(credit[cre.trim()]))
    }
})

console.log(arr.reduce((pre, cur) => {
    return pre+cur
}, 0) /tot);