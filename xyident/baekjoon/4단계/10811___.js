let fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);

let barket = [];

for(let i = 1; i <= n; i++){
    barket.push(i);
}

for(let i = 1; i <= m.length; i++){
    let [a, b] = input[i].split(" ").map(Number);
    let cng = []

    for(let j = a-1; j < b; j++){
        cng.push(barket[i]);
    }

    cng.reverse();
    barket.splice(a-1, b-a+1, ...cng);
}

console.log(barket.join(' '))