const fs = require('fs')
const data = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase();
let alphabat = { a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0 };
[...data].map(x => alphabat[x]++ );

let max = [Math.max(...Object.values(alphabat)), '-'];
let duplicated = false;
for(const[key, value] of Object.entries(alphabat)) {
    if(value==max[0]) {
        if(duplicated) return console.log("?");
        else {
            max[1] = key;
            duplicated = true;
        }
    }
}
console.log(max[1].toUpperCase());