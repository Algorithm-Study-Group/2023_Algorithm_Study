function solution(emergency) {
    let copy = [...emergency];
    let answer = [];
    copy.sort((a,b) => b-a);
    emergency.map(x => {
        let val = copy.indexOf(x) + 1;
        answer.push(val);
    })
    return answer;
}