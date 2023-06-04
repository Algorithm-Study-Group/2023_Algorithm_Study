function solution(balls, share) {
    let answer = 1;
    let pick = balls - share;
    if(share < pick) pick = share;
    for(let i = 0 ; i < pick ; i++) answer *= balls - i;
    for(let i = pick ; i > 0 ; i--) answer /= i;
    return answer;
}