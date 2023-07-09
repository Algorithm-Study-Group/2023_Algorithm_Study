use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: Vec<&str> = input.trim().split_whitespace().map(|s| s).collect();
    println!("{}", input.len());
}
