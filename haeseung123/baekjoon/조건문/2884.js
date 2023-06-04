let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ").map(v => Number(v))

let [h, m] = input

if(h==0) {
    if(m<45) {
        h=23
        m=60-(45-m)
    }
    else m = m-45
}
else {
    if(m<45) {
        h=h-1
        m=60-(45-m)
    }
    else m = m-45
}

console.log(h, m)
