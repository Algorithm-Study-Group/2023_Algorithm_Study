int solution(int n) {
    int arr[11] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800};
    for(int i=0; i<11; ++i) {
        if(arr[i] > n) return i-1;
    }
    
    return 10;
}