int solution(int price) {
    float pay = (price >= 500000) ? .80 : (price >= 300000) ? .90 : (price >= 100000) ? .95 : 1;
    
    return static_cast<int>(price * pay);
}