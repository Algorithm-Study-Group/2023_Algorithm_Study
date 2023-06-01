use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let x = read_int();

    match x {
        90..=100 => {
            println!("A");
        }
        80..=89 => {
            println!("B");
        }
        70..=79 => {
            println!("C");
        }
        60..=69 => {
            println!("D");
        }
        _ => {
            println!("F");
        }
    }
}
