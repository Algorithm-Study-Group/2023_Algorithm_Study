use std::io::{stdin};

fn main() {
    let mut n = String::new();
    stdin().read_line(&mut n).unwrap();
    let n = n.trim().parse::<u32>().unwrap();

    for i in 0..n {
        for _ in 0..n-i-1 {
            print!(" ");
        }
        for _ in 0..i+1 {
            print!("*");
        }
        println!();
    }
}
