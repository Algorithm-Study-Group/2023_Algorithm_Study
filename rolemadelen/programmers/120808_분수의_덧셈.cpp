/* 2차 풀이 */
#include <vector>
using namespace std;

vector<int> solution(int n1, int d1, int n2, int d2) {
    vector<int> ans;
    int num = n1*d2 + n2*d1;
    int denom = d1 * d2;

    for(int i=min(num, denom); i>=2; --i) {
        if(num % i == 0 && denom % i == 0) {
            num /= i;
            denom /= i;
            break;
        }
    }

    ans.push_back(num);
    ans.push_back(denom);

    return ans;
}


/* 1차 풀이 */
// #include <vector>
// using namespace std;

// vector<int> solution(int n1, int d1, int n2, int d2) {
//     vector<int> ans;
//     int a, b;
    
//     if(d1 > d2) {
//         int temp = d1;
//         d1 = d2;
//         d2 = temp;
        
//         temp = n1;
//         n1 = n2;
//         n2 = temp;
//     }
    
//     if(d2 % d1 == 0) {
//         int mult = d2/d1;
//         n1 *= mult;
        
//         a = n1 + n2;
//         b = d2;
//     } else {
//         n1 *= d2;
//         n2 *= d1;
        
//         a = n1+n2;
//         b = d1*d2;
//     }
    
//     int target = 2;
//     while(target <= a && target <= b) {
//         if(a % target == 0 && b % target == 0) {
//             a /= target;
//             b /= target;
//             target = 2;
//         } else {
//             ++target;
//         }
//     }
    
//     ans.push_back(a);
//     ans.push_back(b);
    
//     return ans;
// }