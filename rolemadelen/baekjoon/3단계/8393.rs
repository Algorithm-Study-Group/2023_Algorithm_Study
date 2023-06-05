use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let n = read_int();
    println!("{}", n * (n+1) / 2);
}
