#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> num_list) {
    vector<int> ans(2, 0);
    
    for(int x : num_list) ++ans[x&1];
    return ans;
}


/* 1st attempt */
// #include <string>
// #include <vector>

// using namespace std;

// vector<int> solution(vector<int> num_list) {
//     int even = 0;
//     int odd = 0;
//     vector<int> ans;
    
//     for(int x : num_list) {
//         if(x&1) odd += 1;
//         else even += 1;
//     }
    
//     ans.push_back(even);
//     ans.push_back(odd);
//     return ans;
// }