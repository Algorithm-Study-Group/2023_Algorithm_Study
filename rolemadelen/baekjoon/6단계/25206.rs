use std::io::stdin;

fn main() {
    let mut total_credit: f32 = 0.0;
    let mut credit: f32 = 0.0;

    for _ in 0..20 {
        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();
        let input:Vec<_> = input.split_whitespace().collect();

        let temp: f32 = input[1].parse().unwrap();
        if input[2].trim() == "P" {
            continue;
        }

        let gp : f32 = match input[2].trim() {
            "A+" => 4.5,
            "A0" => 4.0,
            "B+" => 3.5,
            "B0" => 3.0,
            "C+" => 2.5,
            "C0" => 2.0,
            "D+" => 1.5,
            "D0" => 1.0,
            _ => 0.0
        };
        credit += temp * gp;
        total_credit += temp;
    }

    println!("{:.9}", credit/total_credit);
}
