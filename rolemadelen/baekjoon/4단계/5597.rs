use std::io::stdin;

fn read_int() -> i32 {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let mut students = vec![false; 30];

    for _ in 0..28 {
        let id = read_int() as usize;
        students[id-1] = true;
    }

    for i in 0..30 {
        if students[i as usize] == false {
            println!("{}", i+1);
        }
    }
}
