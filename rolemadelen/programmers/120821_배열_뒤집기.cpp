#include <vector>
using namespace std;

vector<int> solution(vector<int> num_list) {
    int i = 0;
    int j = num_list.size() - 1;
    
    while(i<j) {
        int temp = num_list[i];
        num_list[i] = num_list[j];
        num_list[j] = temp;
        
        ++i;
        --j;
    }
    
    return num_list;
}