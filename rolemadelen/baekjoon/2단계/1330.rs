use std::io::stdin;
use std::cmp::Ordering;

fn read_ints() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: Vec<i32> = input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect();
    input
}

fn main() {
    let nums = read_ints();
    let a = nums[0];
    let b = nums[1];
    match a.cmp(&b) {
        Ordering::Less => {
            println!("<");
        }
        Ordering::Greater => {
            println!(">");
        }
        Ordering::Equal => {
            println!("==");
        }
    }
}