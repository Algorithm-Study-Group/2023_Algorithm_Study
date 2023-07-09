use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let n = input.trim().parse().unwrap();

    for i in 0..n {
        for j in 0..n-i-1 {
            print!(" ");
        }
        for j in 0..(2*i)+1 {
            print!("*");
        }
        println!();
    }
    for i in (0..n-1).rev() {
        for j in 0..n-i-1 {
            print!(" ");
        }
        for j in 0..(2*i)+1{
            print!("*");
        }
        println!();
    }
}
