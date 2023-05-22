function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let answer = '';
    [...age.toString()].map(x => {
        answer += arr[parseInt(x)];
    })
    return answer;
}