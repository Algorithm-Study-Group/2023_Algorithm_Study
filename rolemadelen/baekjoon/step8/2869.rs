use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut iter = input.trim().split_whitespace();

    let a: i32 = iter.next().unwrap().parse().unwrap();
    let b: i32 = iter.next().unwrap().parse().unwrap();
    let v: i32 = iter.next().unwrap().parse().unwrap();

    let ans = (v-b-1) / (a-b)+1;
    println!("{ans}");
}
