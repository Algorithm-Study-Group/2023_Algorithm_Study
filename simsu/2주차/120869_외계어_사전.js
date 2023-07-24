function solution(spell, dic) {
    let answer = 2;
    let dic_ = dic.map(x => {
        let x_ = x;
        spell.forEach(y => {
            if(!x_.includes(y)) {
                x_ = 'X';
                return
            }
            x_ = x_.replace(y, '');
        })
        return x_;
    });
    console.log(dic_)
    dic_.map(x => {
        if(x=='') answer = 1;
    })
    return answer;
}