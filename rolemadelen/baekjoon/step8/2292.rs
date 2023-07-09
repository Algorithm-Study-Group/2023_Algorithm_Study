use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let n: u32 = input.trim().parse().unwrap();

    let base = 6;
    let mut hive = 1;
    let mut layer = 1;

    while n > hive {
        hive += base * layer;
        layer += 1;
    }
    println!("{}", layer);
}
