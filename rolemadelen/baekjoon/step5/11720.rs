use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let str = input.trim();
    let mut total: i32 = 0;

    for x in str.chars() {
        total += x as i32 - 48;
    }
    
    println!("{}", total);
}
