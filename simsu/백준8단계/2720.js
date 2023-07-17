const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');

class Change {

    constructor(num) {
        this.num = Number(num);
    }

    change(val) {
        let c = this.count(val);
        this.num = this.num - val*c;
        return c;
    }

    count(val) {
        return Math.floor(this.num/val);
    }
}

let answer = '';
for(let i = 1 ; i <= data[0] ; i++) {
    let ch = new Change(data[i]);
    answer += ch.change(25);
    answer += ' ' + ch.change(10);
    answer += ' ' + ch.change(5);
    answer += ' ' + ch.change(1) + '\n';
}
console.log(answer);