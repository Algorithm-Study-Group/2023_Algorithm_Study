#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<string> s1, vector<string> s2) {
    map<string, int> mymap;
    
    for(string &s : s1) {
        mymap[s] += 1;
    }
    
    for(string &s : s2) {
        mymap[s] += 1;
    }
    
    auto it = mymap.begin();
    
    int cnt =0;
    while(it != mymap.end()) {
        if(it->second > 1) ++cnt;
        ++it;
    }
    
    return cnt;
}