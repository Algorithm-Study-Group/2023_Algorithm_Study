#include <string>
#include <vector>

using namespace std;

int solution(vector<int> array) {
    int arr[1001] = {0};
    for(int x : array) ++arr[x];
    
    int max = 0;
    int pos = -1;
    bool multipleExists = false;
    
    for(int i=0; i<1001; ++i) {
        if(arr[i] == max) {
            multipleExists = true; 
        } else if(arr[i] > max) {
            max = arr[i]; 
            pos = i;
            multipleExists = false;
        }
    }
    
    return (multipleExists) ? -1 : pos;
}