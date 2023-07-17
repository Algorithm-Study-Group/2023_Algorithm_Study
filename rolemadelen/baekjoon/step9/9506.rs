use std::io::{stdin};

fn read() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    loop {
        let n = read();
        if n == -1 {
            break;
        }
        let mut sum = 0;
        let mut s = String::new();
        let m = n / 2 + 1;
        for i in 1..m {
            if n%i == 0 {
                if i == m || i == m-1 {
                    s += &(format!("{}", i));
                } else {
                    s += &(format!("{} + ", i));
                }
                sum += i;
            }
        }

        if sum == n {
            println!("{n} = {s}");
        } else {
            println!("{} is NOT perfect.", n);
        }
    }
}
