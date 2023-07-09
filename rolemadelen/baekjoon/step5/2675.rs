use std::io::{stdin};

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let t = read_int();
    for _ in 0..t {
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let mut iter = input.trim().split_whitespace();
        let num: i32 = iter.next().unwrap().parse().unwrap();
        let str = iter.next().unwrap();

        for ch in str.chars() {
            for _ in 0..num {
                print!("{ch}");
            }
        }
        println!();
    }
}
