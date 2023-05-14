int solution(int hp) {
    int ants = 0;
    
    ants += hp / 5;
    hp %= 5;
    ants += hp / 3;
    hp %= 3;
    ants += hp;
    
    return ants;
}