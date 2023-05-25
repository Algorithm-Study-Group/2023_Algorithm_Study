function solution(my_string, letter) {
    var answer = '';
    my_string = my_string.split("");
    my_string.forEach((str) => {
        if(letter !== str){
            answer += str;
        }
    });
    return answer;
}