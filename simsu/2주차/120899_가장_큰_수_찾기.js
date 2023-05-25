function solution(array) {
    return Array(Math.max(...array), array.indexOf(Math.max(...array)));
}