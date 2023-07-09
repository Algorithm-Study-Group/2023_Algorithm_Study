use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input);

    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: Vec<i32> = input.split_whitespace().map(|s| s.trim().parse().unwrap()).collect();

    println!("{} {}", input.iter().min().unwrap(), input.iter().max().unwrap());
}

