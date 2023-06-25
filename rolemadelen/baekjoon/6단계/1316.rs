use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let t = input.trim().parse().unwrap();
    let mut cnt = 0;

    for _ in 0..t {
        let mut pass = false;
        let mut used = vec![0; 26];
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let str = input.trim().to_owned() + "'";

        for i in 0..str.len()-1 {
            let curr = str.chars().nth(i).unwrap();
            let next = str.chars().nth(i+1).unwrap();
            let idx = (curr as u8) - 97;
            if curr != next {
                if used[idx as usize] != 0 {
                    pass = true;
                    break;
                }
                used[idx as usize] = 1;
            }
        }

        if !pass {
            cnt += 1;
        }

    }
    println!("{}", cnt);
}
