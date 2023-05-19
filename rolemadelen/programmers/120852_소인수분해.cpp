#include <vector>
using namespace std;

vector<int> solution(int n) {
    vector<int> ans;
    vector<bool> arr(10001, 0);
    int target = 2;
    
    while(n > 1) {
        if(n % target == 0) {
            n /= target;
            arr[target] = 1;
            target = 2;
        } else {
            ++target;
        }
    }
    
    for(int i=2; i<10001; ++i) {
        if(arr[i]) ans.push_back(i);
    }
    
    return ans;
}