function solution(array) {
    return array.sort(function compare(a, b) {return a - b;})[parseInt(array.length/2)];
}