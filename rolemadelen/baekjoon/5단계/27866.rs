use std::io::{stdin};

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}
fn main() {
    let mut str = String::new();
    stdin().read_line(&mut str).unwrap();
    let idx = read_int() - 1;

    println!("{}", str.chars().nth(idx as usize).unwrap());
}
