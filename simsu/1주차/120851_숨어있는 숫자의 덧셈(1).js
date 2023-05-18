function solution(my_string) {
    let answer = 0;
    for(let x of my_string) {
        if('0'<=x&&x<='9') answer += parseInt(x);
    }
    return answer;
}