function solution(keyinput, board) {
    let answer = [0,0];
    let width = [parseInt(board[0]/2),parseInt(board[1]/2)]
    keyinput.forEach(dir => {
        
        switch(dir){
            case "left":
                -width[0] < answer[0] ? answer[0]-=1 : 0;
                break;
            case "right":
                width[0] > answer[0] ? answer[0]+=1 : 0;
                break;
            case "up":
                width[1] > answer[1] ? answer[1]+=1 : 0;
                break;
            case "down":
                -width[1] < answer[1] ? answer[1]-=1 : 0;
                break;
            default: 
                break;
        }
    })
    return answer;
}