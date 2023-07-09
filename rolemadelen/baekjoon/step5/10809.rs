// reference: https://www.acmicpc.net/source/59668914 @tiger1710
use std::io::{stdin, Read};

fn main() {
    let mut input = String::new();
    stdin().read_to_string(&mut input).unwrap();
    ('a'..='z').for_each(|ch| {
        if let Some(idx) = input.find(ch) {
            print!("{idx} ");
        } else {
            print!("-1 ");
        }
    })
}
