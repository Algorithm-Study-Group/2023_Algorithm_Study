use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    
    input.trim().parse().unwrap()
}

fn main() {
    let a = read_int();
    let mut b = read_int();
    let c = a*b;

    println!("{}", a*(b%10));
    b /= 10;
    println!("{}", a*(b%10));
    b /= 10;
    println!("{}", a*b);
    println!("{}", c);
}