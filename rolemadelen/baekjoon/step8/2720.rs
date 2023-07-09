use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut t: i32 = input.trim().parse().unwrap();

    while t > 0 {
        input = String::new();
        stdin().read_line(&mut input).unwrap();
        let mut cents: i32 = input.trim().parse().unwrap();

        let q = cents / 25;
        cents %= 25;

        let d = cents / 10;
        cents %= 10;

        let n = cents / 5;
        cents %= 5;

        let p = cents;

        println!("{q} {d} {n} {p}");

        t -= 1;
    }
}
