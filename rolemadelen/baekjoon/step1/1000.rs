use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("error reading input");
    let nums: Vec<i32> = input.split_whitespace().map(|x| x.parse().unwrap()).collect();
    println!("{}", nums[0] + nums[1]);
}