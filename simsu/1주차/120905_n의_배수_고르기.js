function solution(n, numlist) {
    return numlist.filter(x => x%n == 0 ? x : null);
}