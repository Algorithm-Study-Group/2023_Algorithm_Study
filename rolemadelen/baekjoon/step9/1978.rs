use std::io::{stdin};

fn read() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn is_prime(x: i32) -> bool {
    if x < 2 {
        return false;
    }
    if x == 2 {
        return true;
    }
    if x % 2 == 0 {
        return false;
    }

    for i in (3..x).step_by(2) {
        if x % i == 0 {
            return false;
        }
    }

    true
}

fn main() {
    read();
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let nums: Vec<i32> = input.trim().split(' ').map(|x| x.trim().parse().unwrap()).collect();

    let mut cnt = 0;
    for x in nums {
        if is_prime(x) {
            cnt += 1;
        }
    }

    println!("{}", cnt);
}
