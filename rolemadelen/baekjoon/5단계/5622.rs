use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let str = input.trim();
    let v = [2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9];

    let mut sec = 0;
    for ch in str.chars() {
        let idx: usize = ((ch as u8) - 65) as usize;
        sec += v[idx] + 1;
    }

    println!("{}", sec);
}
