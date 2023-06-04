let fs = require("fs");
let inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

let [hour, minute] = inputData;

if (minute < 45) {
	hour -= 1;
	minute = 60 + minute - 45;
} else {
	minute = minute - 45;
}
if (hour < 0) {
	hour = 23;
}

console.log(hour, minute);