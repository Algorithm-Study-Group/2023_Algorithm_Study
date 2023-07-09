use std::io::{stdin, Read};
use std::fmt::Write;

fn main() {
    let mut input = String::new();
    let mut output = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let mut input = input.split_whitespace().map(|s| s.trim().parse().unwrap());

    let t = input.next().unwrap();

    (0..t).for_each (|i| {
        let a = input.next().unwrap();
        let b = input.next().unwrap();

        writeln!(output, "Case #{}: {} + {} = {}", i+1, a, b, a+b).unwrap();
    });

    println!("{output}");
}
