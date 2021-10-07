use std::env::args;
fn main() {
    println!("Hello, world!");

    for arg in args() {
        println!("{}", arg);
    }

}
