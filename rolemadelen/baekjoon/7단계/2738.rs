use std::io::{stdin};

fn read() -> (u32, u32) {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input: Vec<u32> = input.split_whitespace().map(|s| s.parse::<u32>().unwrap()).collect();
    (input[0], input[1])
}

fn read_line() -> Vec<u32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.split_whitespace().map(|s| s.parse::<u32>().unwrap()).collect()
}

fn main() {
    let (n, m) = read();
    
    let mut matrix: Vec<Vec<u32>> = vec![vec![0; m as usize]; n as usize];

    (0..n).for_each (|i| {
        let temp = read_line();
        (0..m).for_each(|j| {
            matrix[i as usize][j as usize] += temp[j as usize];
        });
    });
    (0..n).for_each (|i| {
        let temp = read_line();
        (0..m).for_each(|j| {
            matrix[i as usize][j as usize] += temp[j as usize];
        });
    });

    for row in &matrix {
        for &elem in row {
            print!("{} ", elem);
        }
        println!();
    }
}
