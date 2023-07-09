use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let str = input.trim();
    let revstr: String = str.chars().rev().collect();

    if str == revstr {
        println!("1");
    } else {
        println!("0");
    }
}
