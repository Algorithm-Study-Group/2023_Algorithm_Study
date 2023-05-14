#include <vector>
using namespace std;

vector<int> solution(vector<int> numbers, int num1, int num2) {
    vector<int> ans;
    for(int i=num1; i<=num2; ++i) {
        ans.push_back(numbers[i]);
    }
    return ans;
}