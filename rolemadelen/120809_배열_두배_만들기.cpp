#include <vector>

using namespace std;

vector<int> solution(vector<int> numbers) {
    const int SIZE = numbers.size();
    for(int i=0; i<SIZE; ++i) {
        numbers[i] = numbers[i] << 1;
    }
    
    return numbers;
}