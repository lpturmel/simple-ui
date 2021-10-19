use std::path::PathBuf;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
pub struct Cli {
    /// The source code path of the solidjs app
    #[structopt(long)]
    src_dir: PathBuf,
    // /// The directory of the built solidjs app
    // #[structopt(long)]
    // build_dir: PathBuf,
    // /// The file path of the theme
    // #[structopt(long)]
    // theme_config: PathBuf,
}

impl Cli {
    pub fn src_dir(&self) -> &PathBuf {
        &self.src_dir
    }
    // pub fn build_dir(&self) -> &PathBuf {
    //     &self.build_dir
    // }
    // pub fn theme_config(&self) -> &PathBuf {
    //     &self.theme_config
    // }
}
