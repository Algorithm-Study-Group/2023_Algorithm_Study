function solution(slice, n) {
    var answer = 1;
    while(answer * slice < n){
        answer++;
    }
    return answer;
}