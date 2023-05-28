function solution(s) {
    let q = [];
    let ss = s.split(" ").map(x => {
        if(x === 'Z') {
            q.pop();
        } else {
            q.push(x);
        }
    })
    let answer = q.reduce((x,y) => x + Number(y), 0);
    return answer;
}