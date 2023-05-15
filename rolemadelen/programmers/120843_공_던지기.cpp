
#include <vector>
using namespace std;

int solution(vector<int> numbers, int k) {
    if(2*k-1 == numbers.size()) return numbers[0];
    
    int idx = (2*(k-1)) % numbers.size();
    return numbers[idx];
}