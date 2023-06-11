use std::io::{stdin, Read};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input);

    input = String::new();
    stdin().read_line(&mut input).unwrap();
    let arr: Vec<i32> = input.split_whitespace().map(|s| s.trim().parse().unwrap()).collect();

    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let v: i32 = input.trim().parse().unwrap();

    let mut cnt = 0;
    for x in arr {
        if x == v {
            cnt += 1;
        }
    }

    println!("{cnt}");
}
