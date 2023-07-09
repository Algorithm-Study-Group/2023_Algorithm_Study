use std::io::stdin;

fn read_ints() -> Vec<u128> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: Vec<u128> = input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect();
    input
}

fn main() {
    let nums = read_ints();
    println!("{}", nums[0] + nums[1] + nums[2]);
}