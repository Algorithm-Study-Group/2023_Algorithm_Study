use std::io::stdin;

fn read_ints() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input = input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect();
    input
}

fn main() {
    let nums = read_ints();
    let a = nums[0];
    let b = nums[1];
    let c = nums[2];

    if a==b && a == c {
        println!("{}", 10000+a*1000);
    } else if a != b && a != c && b != c {
        let max = a.max(b.max(c));
        println!("{}", max*100);
    } else {
        if a == b || a == c {
            println!("{}", 1000+a*100);
        } else {
            println!("{}", 1000+b*100);
        }
    }
}