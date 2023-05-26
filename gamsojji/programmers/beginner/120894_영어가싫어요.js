function solution(numbers) {
    numbers = numbers.replace(/zero/g,"0");
    numbers = numbers.replace(/one/g,"1");
    numbers = numbers.replace(/two/g,"2");
    numbers = numbers.replace(/three/g,"3");
    numbers = numbers.replace(/four/g,"4");
    numbers = numbers.replace(/five/g,"5");
    numbers = numbers.replace(/six/g,"6");
    numbers = numbers.replace(/seven/g,"7");
    numbers = numbers.replace(/eight/g,"8");
    numbers = numbers.replace(/nine/g,"9");
    return parseInt(numbers);
}