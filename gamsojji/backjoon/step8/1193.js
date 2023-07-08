let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let num = fs.readFileSync(filePath).toString().trim();
let bunza = 0, bummo = 0;
let t = Number(num);
let n = 2;
while(t > n){
    t -= n-1;
    n++;
}
if(n%2 == 0){
    bunza = n-t;
    bunmo = t
}else{
    bunza = t
    bunmo = n - t
}
console.log(bunza+"/"+bunmo);