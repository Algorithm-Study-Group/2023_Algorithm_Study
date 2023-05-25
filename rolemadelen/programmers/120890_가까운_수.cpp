#include <string>
#include <vector>
#include <cmath>

using namespace std;

int solution(vector<int> array, int n) {
    int answer = 999;
    int min = 999;
    
    for(int i=0; i<array.size(); ++i) {
        int temp = abs(array[i] - n);
        if(temp == min) {
            answer = answer <= array[i] ? answer : array[i];
        } else if(temp < min) {
            min = temp;
            answer = array[i];
        }
    }
    
    return answer;
}