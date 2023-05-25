function solution(num_list) {
    let answer = [0,0];
    for(let i of num_list) {
        let n = i%2 == 0 ? 0 : 1;
        answer[n]++;
    }
    return answer;
}