function solution(array, height) {
    array.push(height);
    return array.sort((a,b) => b-a).indexOf(height);
}