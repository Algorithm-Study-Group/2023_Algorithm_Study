function solution(i, j, k) {
    var answer = 0;
    for(i; i<=j;i++){
        i.toString().split("").forEach(num => num == k.toString()? answer++ : 0);
    }
    return answer;
}