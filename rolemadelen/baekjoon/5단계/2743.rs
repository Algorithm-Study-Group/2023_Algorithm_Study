use std::io::{stdin};

fn main() {
    let mut str = String::new();
    stdin().read_line(&mut str).unwrap();
    println!("{}", str.trim().len());
}
