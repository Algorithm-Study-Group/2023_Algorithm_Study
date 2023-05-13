int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

int solution(int n) {
    return n / gcd(n, 6);
}