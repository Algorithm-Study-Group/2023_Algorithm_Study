function solution(id_pw, db) {
    var answer = '';
    let login = db.filter(data=> data[0] == id_pw[0]);
    if(login.length <= 0){
        answer = 'fail';
    }else{
        login[0][1] == id_pw[1]? answer = 'login': answer = 'wrong pw';
    }
    return answer;
}