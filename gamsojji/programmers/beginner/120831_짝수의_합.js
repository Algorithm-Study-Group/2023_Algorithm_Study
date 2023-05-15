function solution(n) {
    var answer = 0;
    
    for(let i = 2; i <= n; i+=2){
        i%2 == 0? answer += i: 0;
    }
    
    return answer ;
}