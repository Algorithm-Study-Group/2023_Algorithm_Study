use std::io::{stdin};

fn main() {
    let mut max = -1;
    let mut pos = -1;
    (0..9).for_each(|idx| {
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let v: i32 = input.trim().parse().unwrap();

        if v > max {
            pos = idx + 1;
            max = v;
        }
    });

    println!("{}\n{}", max, pos);
}

