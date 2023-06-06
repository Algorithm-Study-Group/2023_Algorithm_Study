use std::io::{stdin, Read};
use std::fmt::Write;

fn main() {
    let mut input = String::new();
    let mut output = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let mut input = input.split_whitespace().map(|s| s.parse::<u32>().unwrap());

    while let (Some(a), Some(b)) = (input.next(), input.next()) {
        writeln!(output, "{}", a+b).unwrap();
    }

    println!("{output}");
}
