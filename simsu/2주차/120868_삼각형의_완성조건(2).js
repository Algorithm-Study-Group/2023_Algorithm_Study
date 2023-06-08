function solution(sides) {
    const rest = sides[0] < sides[1] ? sides[0] : sides[1];
    return 2*rest-1;
}