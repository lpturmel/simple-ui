use structopt::StructOpt;
use std::{fs, io, time::{SystemTime} };
use colored::*;
use walkdir::WalkDir as WalkDirSync;
use cli::Cli;

use pest::Parser;
#[macro_use]
extern crate pest_derive;

pub mod cli;


#[derive(Parser)]
#[grammar = "grammar.pest"]
struct JsxParser;

fn main() -> io::Result<()> {
    let mut nb_files = 0;
    
    let args = Cli::from_args();
    

    // let vars = Vars::new();
    
    let parsing_timer = SystemTime::now();
    
    for entry in WalkDirSync::new(&args.src_dir()).into_iter().filter_map(|e| e.ok()) {
       
        let file_path = entry.path();

        let filename = file_path.to_string_lossy();
        let extension = filename.split(".").last().unwrap();
        
        if extension.contains("/") {
            continue;
        }
        
        if extension == "tsx" || extension == "js" {
            nb_files = nb_files +1;
            println!("\n{} {}\n","Processing: ".blue(), filename);

            let file_content = match fs::read_to_string(file_path) {
                Ok(file) => {
                    file
                }
                Err(e) => {
                    panic!("Could not read file: {}", e)
                }
            };
        
           let idents = JsxParser::parse(Rule::jsx_file, &file_content);

           println!("{:?}", idents);

        }
    }
    
    println!("Finished parsing {} file(s) in {}ms", nb_files, parsing_timer.elapsed().unwrap().as_millis());
    Ok(())
    
}