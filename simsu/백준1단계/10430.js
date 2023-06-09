const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    let [a, b, c] = line.split(' ');
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);
    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c);
    rl.close();
}).on('close', () => {
    process.exit();
})