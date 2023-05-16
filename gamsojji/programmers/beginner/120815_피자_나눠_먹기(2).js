function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
       if(6*i%n == 0){
           answer = i;
           break;
       }
    }
    return answer;
}