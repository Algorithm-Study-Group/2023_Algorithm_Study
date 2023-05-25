function solution(my_string, n) {
    var answer = '';
    my_string = my_string.split("");
    my_string.forEach((str) => {
        for(let i = 0; i < n; i++){
            answer += str;
        }
    });
    return answer;
}