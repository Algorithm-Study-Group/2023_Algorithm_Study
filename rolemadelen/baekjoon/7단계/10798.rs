use std::io::{stdin};

fn read_line() -> Vec<char> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().chars().collect()
}

fn main() {
    let mut matrix: Vec<Vec<char>> = vec![];
    for _ in 0..5 {
        matrix.push(read_line());
    }

    let mut ans = String::new();

    for i in 0..15 {
        for j in 0..5 {
            if i < matrix[j].len() {
                ans.push(matrix[j][i]);
            }
        }
    }
    println!("{ans}");
}
