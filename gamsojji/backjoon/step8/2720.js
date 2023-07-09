let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [num, ...mon] = fs.readFileSync(filePath).toString().trim().split("\n");
let coin = [25, 10, 5, 1];
let result = "";
mon.forEach(n => {
    let money = n;
    coin.forEach(c => {
        result += parseInt(money/c)+" ";
        money = money%c;
    })
    result += "\n";
})
console.log(result)