#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> array) {
    vector<int> answer(2);
    int max = array[0];
    int pos = 0;
    
    for(int i=1; i<array.size(); ++i) {
        if(max < array[i]) {
            max = array[i];
            pos = i;
        }
    }
    
    answer[0] = max;
    answer[1] = pos;
    
    return answer;
}