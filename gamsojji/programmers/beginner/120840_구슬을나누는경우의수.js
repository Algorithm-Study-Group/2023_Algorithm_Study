function solution(balls, share) {
    var answer = 0;
    var bunmo = 1;
    for(let shar = share; shar >= 1; shar--){
        bunmo *= shar;
    }
    var bunza = 1;
    for(let ball = balls; ball >= balls-share+1; ball--){
        bunza *= ball;
    }
    return bunza/bunmo;
}