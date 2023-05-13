#include <vector>
using namespace std;

vector<int> solution(int n) {
    vector<int> answer;
    for(int i=1; i<=n; ++i) {
        if(i&1) answer.push_back(i);
    }
    return answer;
}

// 굳이 if문 쓸 필요없이 그냥 홀수만 push_back하면 되네