int nchooser(int n, int m) {
    if (m>n) return 0;
    if (m==0 || n==m) return 1;

    double num = n;
    for (int i=n-1; i>m; --i)
        num *= i;

    double den = n-m;
    for (int i = n-m-1; i > 0; --i)
        den *= i;

    return static_cast<int>(num / den);
}

int solution(int n, int m) {
    return nchooser(n, m);
}