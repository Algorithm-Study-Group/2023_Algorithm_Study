use std::io::{stdin};

fn read_line() -> Vec<u32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.split_whitespace().map(|s| s.parse::<u32>().unwrap()).collect()
}

fn main() {
    let mut matrix: Vec<Vec<u32>> = vec![];
    for _ in 0..9 {
        matrix.push(read_line());
    }

    let mut max = 0;
    let mut i = 0;
    let mut j = 0;

    for idx in 0..9 {
        for jdx in 0..9 {
            if matrix[idx][jdx] > max {
                max = matrix[idx][jdx];
                i = idx;
                j = jdx;
            }
        }
    }

    println!("{max}\n{} {}", i+1, j+1);
}

