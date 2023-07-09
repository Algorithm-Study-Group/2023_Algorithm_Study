use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).ok();
    let n: i32 = input.trim().parse().unwrap();

    for i in 1..10 {
        println!("{n} * {i} = {}", n*i);
    }
}
