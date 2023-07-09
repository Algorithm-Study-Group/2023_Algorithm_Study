use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut iter = input.trim().split_whitespace();
    let mut num: u32 = iter.next().unwrap().parse().unwrap();
    let base: u32 = iter.next().unwrap().parse().unwrap();

    if num == 0 {
        println!("0");
        return;
    }
    let mut ans = String::new();

    while num > 0 {
        let ch = num % base;
        num /= base;

        let a = match ch {
            0..=9 => {
               ((ch + 48) as u8) as char
            }
            _ => {
               ((ch + 55) as u8) as char
            }
        };
        ans.insert(0, a);
    }

    println!("{ans}");
}
