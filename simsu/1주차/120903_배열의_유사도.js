function solution(s1, s2) {
    let answer = 0;
    let wq = false;
    s1.map(x => {
        s2.map(y => {
            if(x==y && !wq) {
                wq = true;
                answer++;
            }
        })
        wq=false;
        }
    );
    return answer;
}