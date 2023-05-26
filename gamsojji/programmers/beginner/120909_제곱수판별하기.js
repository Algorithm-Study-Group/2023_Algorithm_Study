function solution(n) {
    let answer = 2;
    for(let i = 2; i < n; i++){
        if(n/i == i){
            answer = 1;
        }
    }
    return answer;
}