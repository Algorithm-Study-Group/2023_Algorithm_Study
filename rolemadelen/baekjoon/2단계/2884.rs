use std::io::stdin;

fn read_ints() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input = input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect();
    input
}

fn main() {
    let nums = read_ints();
    let mut h = nums[0];
    let mut m = nums[1];

    if m>=45 {
        m -= 45;
    } else {
        m += 15;
        if h==0 {
            h = 23
        } else {
            h -= 1;
        }
    }

    println!("{h} {m}");
}