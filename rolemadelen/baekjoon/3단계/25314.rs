use std::io::{stdin};

fn main() {
    let mut bytes = String::new();
    stdin().read_line(&mut bytes).unwrap();
    let bytes = bytes.trim().parse::<u32>().unwrap() / 4;

    let mut res = String::new();
    (0..bytes).for_each (|_| {
        res += "long ";
    });

    println!("{res}int");
}
