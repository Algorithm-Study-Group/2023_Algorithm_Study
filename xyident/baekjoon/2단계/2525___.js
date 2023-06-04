let fs = require("fs");
let inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

let [hour, minute, time] = inputData;

if(minute + time <= 60){
    minute += time;
} else {
    hour += parseInt((minute + time) / 60);
    minute = (minute + time)%60;
}

console.log(hour, minute);