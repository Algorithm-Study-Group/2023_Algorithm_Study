use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let input = input.trim();

    let str = input
                .replace("dz=", "d")
                .replace("d-", "d")
                .replace("c=", "c")
                .replace("c-", "c")
                .replace("lj", "l")
                .replace("nj", "n")
                .replace("s=", "s")
                .replace("z=", "z");

    println!("{}", str.len());
}
