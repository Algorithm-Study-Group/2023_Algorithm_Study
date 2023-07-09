use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: Vec<i32> = input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect();
    let mut needed: Vec<i32> = vec![1, 1, 2, 2, 2, 8];

    for i in 0..6 {
        needed[i as usize] -= input[i as usize];
    }

    for x in &needed {
        print!("{x} ");
    }
}
