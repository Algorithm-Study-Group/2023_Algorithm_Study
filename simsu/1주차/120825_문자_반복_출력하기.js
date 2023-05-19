function solution(my_string, n) {
    var answer = [...my_string].map(x => x.repeat(n)).join('');
    return answer;
}