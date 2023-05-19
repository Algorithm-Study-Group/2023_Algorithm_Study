function solution(sides) {
    let max = Math.max(...sides);
    let all = sides.reduce((x,y) => x+y);
    return all-max > max ? 1 : 2;
}