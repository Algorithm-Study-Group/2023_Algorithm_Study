function solution(my_string) {
    var answer = '';
    my_string.split("").forEach(str => {
        str == str.toUpperCase()? answer += str.toLowerCase() : answer += str.toUpperCase();
    })
    return answer;
}