use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut n: i32 = input.trim().parse().unwrap();

    let mut i = 1;
    while n > i {
        n -= i;
        i += 1;
    }

    if i % 2 == 1 {
        println!("{}/{}", i+1-n, n);
    } else {
        println!("{}/{}", n,i+1-n);
    }
}
