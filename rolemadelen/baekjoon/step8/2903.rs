use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let n: u32 = input.trim().parse().unwrap();

    let base: u32 = 2;
    let ans: u32 = (base.pow(n) + 1).pow(2);
    println!("{ans}");
}
