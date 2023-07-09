use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let x = read_int();
    if (x%4 == 0 && x%100 != 0) || (x%400 == 0) {
        println!("1");
    } else {
        println!("0");
    }
}