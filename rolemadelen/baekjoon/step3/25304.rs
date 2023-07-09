use std::io::{stdin, Read};

fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let mut input = input.split_whitespace().map(|s| s.parse::<u32>().unwrap());

    let mut total = input.next().unwrap();

    let t = input.next().unwrap();
    (0..t).for_each (|_| {
        let cost = input.next().unwrap();
        let qty = input.next().unwrap();

        total -= cost * qty;
    });

    println!("{}", if total == 0 {"Yes"} else {"No"});
}
