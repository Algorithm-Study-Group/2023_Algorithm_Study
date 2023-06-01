use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn read_ints() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input = input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect();
    input
}

fn main() {
    let nums = read_ints();
    let t = read_int();
    let mut h = nums[0];
    let mut m = nums[1];

    m += t;
    h += m/60;
    m %= 60;
    h %= 24;

    println!("{h} {m}");
}