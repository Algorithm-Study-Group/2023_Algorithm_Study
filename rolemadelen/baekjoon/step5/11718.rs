use std::io::{stdin, Read};

fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let input: Vec<&str> = input.split('\n').collect();
    for s in input {
        println!("{s}");
    }
}
