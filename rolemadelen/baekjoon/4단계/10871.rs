use std::io::{stdin};
use std::fmt::Write;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input);
    let mut input = input.split_whitespace().map(|s| s.trim().parse::<i32>().unwrap());
    let n = input.next().unwrap();
    let x = input.next().unwrap();

    let mut input = String::new();
    stdin().read_line(&mut input);
    let input: Vec<i32> = input.split_whitespace().map(|s| s.trim().parse().unwrap()).collect();

    let mut output = String::new();
    for v in input {
        if v < x {
            write!(output, "{} ", v);
        }
    }

    println!("{output}");
}

