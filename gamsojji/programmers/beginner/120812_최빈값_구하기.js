function solution(array) {
    var answer =[] , max = 0, idx = 0;
    
    array.forEach(item => {
        answer[item] == null? answer[item] = 1: answer[item] +=1;
    });
    answer.forEach((item, index)=> {
        if(item != 0 && max < item){
            max = item;
            idx = index;
        }else if(item == max){
            idx = -1;
            return;
        }
    })
    
    return idx;
}