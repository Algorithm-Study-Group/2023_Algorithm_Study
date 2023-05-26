function solution(s1, s2) {
    let answer= 0;
    s1.forEach(one => {
        s2.forEach(two => {
            if(one == two){
                answer++;
            }
        })
    })
    return answer;
}