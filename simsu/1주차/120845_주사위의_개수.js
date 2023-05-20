function solution(box, n) {
    let x = Math.floor(box[0]/n);
    let y = Math.floor(box[1]/n);
    let z = Math.floor(box[2]/n);
    return x*y*z;
}