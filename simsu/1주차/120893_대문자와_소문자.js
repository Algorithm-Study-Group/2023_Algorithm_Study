function solution(my_string) {
    let answer = '';
    for(let i in my_string) {
        let ascii_num = my_string.charCodeAt(i)
        if(ascii_num<=90) answer += String.fromCharCode(ascii_num + 32);
        else answer += String.fromCharCode(ascii_num - 32);
    }
    return answer;
}