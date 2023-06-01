use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut input = input.split_whitespace().map(|x| x.parse().unwrap());
    let a: i32 = input.next().unwrap();
    let b: i32 = input.next().unwrap();
    let c: i32 = input.next().unwrap();

    println!("{}", (a+b)%c);
    println!("{}", ((a%c)+(b%c))%c);
    println!("{}", (a*b)%c);
    println!("{}", ((a%c)*(b%c))%c);
}