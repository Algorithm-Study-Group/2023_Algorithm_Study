use std::io::{stdin};

fn read() -> (i32, i32) {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut input = input.trim().split_whitespace();

    let a: i32 = input.next().unwrap().parse().unwrap();
    let b: i32 = input.next().unwrap().parse().unwrap();

    (a, b)
}

fn main() {
    let (n, k) = read();

    let mut k = k;
    for i in (1..=n).rev() {
        if n%i == 0 {
            k -= 1;
        }
        if k == 0 {
            println!("{}", n/i);
            return;
        }
    }

    println!("0");
}
