// 시간초과

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let input = 72;
if(input != 1){
  while(input > 1){
    for(let i = 2; i < input; i++){
      if(input % i == 0){
        console.log(i);
        input /= i;
        break;
      }
    }
  }
}