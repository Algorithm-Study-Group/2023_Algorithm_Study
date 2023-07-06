use std::io::{stdin};
use std::fmt::Write;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut input = input.split_whitespace().map(|s| s.parse().unwrap());
    let n: i32 = input.next().unwrap();
    let m: i32 = input.next().unwrap();

    let mut arr = vec![0; n as usize];

    (0..m).for_each(|_| {
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let mut input = input.split_whitespace().map(|s| s.parse().unwrap());

        let i: i32 = input.next().unwrap() - 1;
        let j: i32 = input.next().unwrap() - 1;
        let k: i32 = input.next().unwrap();

        (i..=j).for_each(|idx| {
            arr[idx as usize] = k;
        });
    });

    let mut output = String::new();
    for elem in &arr {
        write!(output, "{} ", elem).unwrap();
    }

    println!("{output}");
}
