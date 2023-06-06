let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
if(input[0] > 0){
    if(input[1] > 0) {
        console.log(1);
    }else{
        console.log(4);
    }
}else{
    if(input[1] > 0) {
        console.log(2);
    }else{
        console.log(3);
    }
}
return 0;