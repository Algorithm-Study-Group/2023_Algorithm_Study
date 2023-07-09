use std::io::stdin;

fn read_ints() -> Vec<i32> {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.split_whitespace().map(|x| x.trim().parse().unwrap()).collect()
}

fn main() {
    let input = read_ints();
    let n = input[0] as usize;
    let m = input[1];
    let mut bucket = vec![0; n];

    for i in 0..n {
        bucket[i] = i+1;
    }

    for _ in 0..m {
        let input = read_ints();
        let mut a = input[0] - 1;
        let mut b = input[1] - 1;

        while a < b {
            bucket.swap(a as usize, b as usize);
            a += 1;
            b -= 1;
        }
    }

    for x in bucket {
        print!("{} ", x);
    }
}
