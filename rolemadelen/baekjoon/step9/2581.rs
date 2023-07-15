use std::io::{stdin};

fn read() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}


fn is_prime(n: i32) -> bool {
    if n <= 1 { return false; }
    if n == 2 || n == 3 { return true; }
    if n % 2 == 0 || n % 3 == 0 { return false; }

    let mut i = 5;
    while i*i <= n {
        if n % i == 0 || n % (i+2) == 0 { return false; }
        i += 6;
    }
    
    true
}

fn main() {
    let m = read();
    let n = read();
    let mut sum = 0;
    let mut min = -1;

    for i in m..=n {
        if is_prime(i) {
            sum += i;
            if min == -1 { min = i; }
        }
    }

    if sum == 0 {
        println!("-1");
    } else {
        println!("{}\n{}", sum, min);
    }
}
