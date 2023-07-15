use std::io::{stdin};

fn read() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let x = read();
    let mut x = x;

    while x > 1 {
        let mut target = 2;

        while x % target != 0 {
            target += 1;
        }
        x /= target;

        println!("{target}");
    }
}

