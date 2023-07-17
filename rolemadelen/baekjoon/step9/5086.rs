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
    loop {
        let (a, b) = read();

        if a == 0 && b == 0 {
            break;
        }

        if b % a == 0 {
            println!("factor");
        } else if a % b == 0 {
            println!("multiple");
        } else {
            println!("neither");
        }

    }
}
