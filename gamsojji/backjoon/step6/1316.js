let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [cnt, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 0;
arr.forEach(word => {
    spells = word.trim().split("");
    alpha = [];
    success = true;
    spells.forEach((w,sidx) => {
        if(!alpha[w]){
            alpha[w] = 1
        }else{
            if(spells[sidx-1] != w){
                success = false;
                return false;
            }
        }

    })
    if(success) result++;
})

console.log(result);