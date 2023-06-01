use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let nums: Vec<i32> = input.split_whitespace().map(|x| x.parse().unwrap()).collect();
    println!("{}", nums[0]+nums[1]);
    println!("{}", nums[0]-nums[1]);
    println!("{}", nums[0]*nums[1]);
    println!("{}", nums[0]/nums[1]);
    println!("{}", nums[0]%nums[1]);
}