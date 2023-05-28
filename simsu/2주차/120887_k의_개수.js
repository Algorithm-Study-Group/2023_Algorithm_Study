function solution(i, j, k) {
    let answer = 0;
    let k_string = k.toString();
    for(let a = i ; a <= j ; a++) {
        let i_string = a.toString();
        for(let b of i_string) {
            if(b==k_string) answer++;
        }
    }
    return answer;
}