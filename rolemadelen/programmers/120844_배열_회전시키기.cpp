#include <string>
#include <vector>
using namespace std;

vector<int> solution(vector<int> numbers, string direction) {
    if(direction[0] == 'r') {
        int last = numbers.back();
        numbers.insert(numbers.begin(), last);
        numbers.pop_back();
    } else {
        numbers.push_back(numbers[0]);
        numbers.erase(numbers.begin());
    }
    
    return numbers;
}