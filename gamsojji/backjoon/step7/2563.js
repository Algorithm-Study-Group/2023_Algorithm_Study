let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [cnt, ...papers] = fs.readFileSync(filePath).toString().trim().split("\n");
papers = papers.map(n => n.split("").map(Number));
let result = 100 * papers.length;
for (let pp = 0; pp < papers.length; pp++) {
    for (let com = pp+1; com < papers.length; com++) {
        console.log(pp, com)
        if((papers[pp][0] < papers[com][0] && papers[com][0] < papers[pp][0]+10 && papers[com][0] != papers[pp][0]) || 
           (papers[pp][0] > papers[com][0] && papers[com][0] > papers[pp][0]-10 && papers[com][0] != papers[pp][0])){
            if((papers[pp][1] < papers[com][1] && papers[com][1] < papers[pp][1]+10 && papers[com][1] != papers[pp][1])||
               (papers[pp][1] > papers[com][1] && papers[com][1] > papers[pp][1]-10 && papers[com][1] != papers[pp][1])){
                let x = (10 - Math.abs(papers[pp][0] - papers[com][0]));
                let y = (10 -Math.abs(papers[pp][1] - papers[com][0]));
                result -= x * y;
                console.log("pp : ",pp," com : ", com," x: ",x," y: ",y, " x*y: ", x*y)
            }
        }
        
    }
    
}

console.log(result);