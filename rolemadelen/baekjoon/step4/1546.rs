use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn read_ints() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect()
}

fn main() {
    let _ = read_int();
    let mut scores = read_ints();
    scores.sort();
    let m = scores[scores.len()-1];
    let mut res: f32 = 0.0;

    for i in 0..scores.len() {
        res += ((scores[i] as f32 / m as f32) * 100.0) as f32;
    }

    println!("{}", res / scores.len() as f32);
}
