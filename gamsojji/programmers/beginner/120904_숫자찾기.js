function solution(num, k) {
    let answer = num.toString().split("").map(t=>Number(t)).indexOf(k);
    return answer == -1 ? -1 : answer+1;
}