function solution(array, n) {
    let compare = 101;
    let answer = 0;
    array.sort((a,b) => a-b);
    array.forEach(x => {
        if(compare > Math.abs(x-n)) {
            compare = Math.abs(x-n);
            answer = x;
        }
    })
    return answer;
}