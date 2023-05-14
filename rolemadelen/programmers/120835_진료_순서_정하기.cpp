#include <vector>
#include <map>

using namespace std;

vector<int> solution(vector<int> emergency) {
    vector<int> ans;
    map<int, int> mymap;
    for(int i=0; i<emergency.size(); ++i) {
        mymap[emergency[i]] = i;
    }
    
    auto iter = mymap.begin();
    while(iter != mymap.end()) {
        ans.push_back(emergency.size() - (iter->second));
        iter++;
    }
    
    return ans;
}