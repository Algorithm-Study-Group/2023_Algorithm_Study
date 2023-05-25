function solution(my_string) {
    var answer = my_string.replaceAll(/a|e|i|o|u/g, '');
    return answer;
}