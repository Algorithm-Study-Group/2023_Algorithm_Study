function solution(my_string) {
    var answer = my_string.split("").map(n=>parseInt(n)).filter(t=>0 <= t && t <= 9).sort();
    return answer;
}