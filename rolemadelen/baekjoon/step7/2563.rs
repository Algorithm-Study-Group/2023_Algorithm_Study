use std::io::{stdin, Read};

fn main() {
    let mut arr: Vec<Vec<u32>> = vec![vec![0; 101]; 101];
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    let mut input = input.split_ascii_whitespace().map(|x| x.parse::<u32>().unwrap());

    let n = input.next().unwrap();

    for _ in 0..n {
        let (x, y) = (input.next().unwrap(), input.next().unwrap());

        for i in x..x+10 {
            for j in y..y+10 {
                arr[i as usize][j as usize] += 1;
            }
        }
    }

    let mut cnt = 0;
    for row in arr {
        for elem in row {
            if elem > 0 {
                cnt += 1;
            }
        }
    }

    println!("{}", cnt);
}
