#include <string>
#include <vector>

using namespace std;

int solution(int order) {
    int cnt = 0;
    
    while(order > 1) {
        int temp = order % 10;
        if(temp && temp % 3 == 0) ++cnt;
        order /= 10;
    }
    return cnt;
}