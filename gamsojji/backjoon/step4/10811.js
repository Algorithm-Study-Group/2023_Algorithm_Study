let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [NnM, ...exes] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = NnM.split(" ").map(Number);
let baskets = Array.from(new Array(n), (x, i) => i + 1);
let result = "";
const execute = (str) => {
    const [i, j] = str.split(" ").map(Number);
    if(i == j) return;
    let part = baskets.slice( i-1, j ).reverse();
    if(i <= 1){
        baskets = [ ...part, ...baskets.slice( j)];
    }else{
        baskets = [...baskets.slice( 0, i-1 ), ...part, ...baskets.slice( j)];
    }
    
};

exes.forEach(execute);
baskets.forEach((e) => (result += `${e} `));
console.log(result);