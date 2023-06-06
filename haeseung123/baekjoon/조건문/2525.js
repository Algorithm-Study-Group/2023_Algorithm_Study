let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let h = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let t = Number(input[1])

if(m+t >= 60) {
    h += parseInt((m+t)/60)
    m = (m+t)%60
    h>=24 ? h=h-24 : false
} 
else {
    m = m+t
}

console.log(h, m)
