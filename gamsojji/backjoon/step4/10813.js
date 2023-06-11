let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [NnM, ...exes] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = NnM.split(" ").map(Number);
const baskets = Array.from(new Array(n), (x, i) => i + 1);
let result = "";

const execute = (str) => {
  const [i, j] = str.split(" ").map(Number);
  let inum = baskets[i-1];
  let jnum = baskets[j-1];
  baskets[i-1] = jnum;
  baskets[j-1] = inum;
};

exes.forEach(execute);
baskets.forEach((e) => (result += `${e} `));
console.log(result);