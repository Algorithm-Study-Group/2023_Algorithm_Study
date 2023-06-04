use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: i32 = input.trim().parse().unwrap();
    println!("{}", input - 543);
}