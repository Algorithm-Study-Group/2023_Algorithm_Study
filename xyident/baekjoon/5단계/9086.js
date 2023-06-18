let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++){
    let text = input[i];
    let end = text.length - 1;

    console.log(
        input[i].substring(0, 1) + input[i].substring(end, input[i].length)
      );
}