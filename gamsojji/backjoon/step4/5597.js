let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let nums = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
nums.sort((a, b) => a - b);
let result = [];
let compare = 1;
for (let index = 1; compare <= 30; compare++) {
    if(compare != nums[index-1]){
        result.push(compare);
    }else{
        index++;
    }
    
}

console.log(...result);