use std::io::stdin;
use std::collections::HashSet;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let mut set: HashSet<i32> = HashSet::new();

    for _ in 0..10 {
        let num = read_int();
        set.insert(num%42);
    }

    println!("{}", set.len());
}
