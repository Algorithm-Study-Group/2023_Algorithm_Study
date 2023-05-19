function solution(hp) {
    let hp_ = hp;
    let answer = 0;
    answer += Math.floor(hp_/5);
    hp_ %= 5;
    answer += Math.floor(hp_/3);
    hp_ %= 3;
    answer += hp_;
    return answer;
}