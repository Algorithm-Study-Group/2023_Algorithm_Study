#include <iostream>
using namespace std;

int main() {
    int h,m,t;
    cin >> h >> m;
    cin >> t;

    m += t;
    h += (m/60);
    if(h>=24) h %= 24;
    m %= 60;

    cout << h << ' ' << m << endl;
    
    return 0;
}