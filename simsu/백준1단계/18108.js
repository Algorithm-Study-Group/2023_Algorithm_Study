const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    const year = Number(line);
    console.log(year-543);
    rl.close();
}).on('close', () => {
    process.exit();
})