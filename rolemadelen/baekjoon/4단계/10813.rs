use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let mut input = input.split_whitespace().map(|s| s.parse().unwrap());
    let n: usize = input.next().unwrap();
    let m = input.next().unwrap();

    let mut arr: Vec<usize> = vec![0; n];

    (1..=n).for_each(|i| {
        arr[i-1] = i;
    });

    (0..m).for_each(|_| {
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let mut input = input.split_whitespace().map(|s| s.parse::<usize>().unwrap());

        let a: usize = input.next().unwrap() - 1;
        let b: usize = input.next().unwrap() - 1;

        arr.swap(a, b);
    });

    for x in arr {
        print!("{} ", x);
    }
}
