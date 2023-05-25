function solution(my_string) {
    var answer = "";
    let arr = my_string.split("");
    for(let i = arr.length-1; i >= 0; i--){
        answer+=arr[i];
    }
    return answer;
}