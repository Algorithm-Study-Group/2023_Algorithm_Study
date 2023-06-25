let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let num = fs.readFileSync(filePath).toString().trim();
num = parseInt(num);
let result = "";
for (let i = 1; i <= num; i++) {
    
    for(let j = 0; j < num-i; j++){
        result+= " ";
    }
    for(let k = 0; k < 1+2*(i-1); k++){
        result+= "*";
    }
    result+="\n"
}
for (let i = num-1; i > 0; i--) {
    
    for(let j = 0; j < num-i; j++){
        result+= " ";
    }
    for(let k = 0; k < 1+2*(i-1); k++){
        result+= "*";
    }
    if(i>1){
        result+="\n"
    }
}
console.log(result);
