function solution(my_string) {
    var answer = my_string.split("").filter(t => 0 <= t && t <= 9).reduce((a,b) => a+parseInt(b),0);
    return answer;
}