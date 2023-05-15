#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int arr[101] = {0, 0, 0, 0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8};
    for(int i=16; i<=n; ++i) {
        arr[i] = arr[i-1];
        for(int j=2; j<i; ++j) {
            if(i%j == 0) {
                arr[i] = arr[i-1] + 1;
                break;
            }
        }
    }
    
    return arr[n];
}