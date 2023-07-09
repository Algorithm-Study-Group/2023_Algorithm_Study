use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut iter = input.trim().split_whitespace();
    let s: Vec<char> = iter.next().unwrap().to_string().chars().collect();
    let base: u32 = iter.next().unwrap().parse().unwrap();

    let mut ans: u32 = 0;
    let mut p: u32 = 0;

    for ch in s.iter().rev() {
        let val = match ch {
            'A'..='Z' => {
                (ch.to_ascii_lowercase() as u8 - 87) as u32
            }
            '0'..='9' => {
                (ch.to_ascii_lowercase() as u8 - 48) as u32
            }
            _ => unreachable!()
        };
        ans += val * base.pow(p);
        p += 1;
    }
    println!("{ans}");
}
