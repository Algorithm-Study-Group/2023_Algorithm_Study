#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(int n) {
    vector<int> answer;
    answer.push_back(1);
    
    for(int i=2; i<=n; ++i) {
        if(n%i == 0) answer.push_back(i);
    }
    return answer;
}