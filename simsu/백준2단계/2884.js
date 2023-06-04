const fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().trim();
let time = data.split(" ").map(x => Number(x));
if(time[1]<45) {
    time[0] = (time[0]+23)%24;
    time[1] = (time[1]+15)%60;
} else time[1] = time[1]-45;
console.log(time[0] + ' ' + time[1]);