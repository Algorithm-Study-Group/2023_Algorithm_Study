use std::io::stdin;
use std::collections::HashMap;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let str = input.trim();
    let mut freq: HashMap<char, i32> = HashMap::new();

    for ch in str.chars() {
        *freq.entry(ch.to_ascii_lowercase()).or_insert(0) += 1;
    }

    let max = match freq.values().max() {
        Some(&max) => max,
        None => {
            return;
        }
    };

    let temp: Vec<_> = freq.iter().filter(|&(_, count)| *count == max).collect();
    if temp.len() == 1 {
        let (ch, _) = temp[0];
        let ch = ch.to_ascii_uppercase();
        println!("{ch}");
    } else {
        println!("?");
    }
}
