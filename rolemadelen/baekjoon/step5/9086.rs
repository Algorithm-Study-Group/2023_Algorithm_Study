use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let t = input.trim().parse().unwrap();
    
    for _ in 0..t {
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let str = input.trim();
        let b = str.chars().nth(0).unwrap();
        let e = str.chars().nth(str.len()-1).unwrap();
        println!("{}{}", b, e);
    }
}
