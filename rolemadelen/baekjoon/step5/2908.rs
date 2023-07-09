use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let revinput: String = input.trim().chars().rev().collect();
    let input: Vec<i32> = revinput.split_whitespace().map(|s| s.parse().unwrap()).collect();
    if input[0] > input[1] {
        println!("{}", input[0]);
    } else {
        println!("{}", input[1]);
    }
}
