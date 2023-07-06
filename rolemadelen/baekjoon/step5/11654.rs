use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let ch = input.trim().chars().next().unwrap();
    println!("{}", ch as u8);
}
