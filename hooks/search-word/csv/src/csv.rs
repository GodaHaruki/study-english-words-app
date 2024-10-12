use crate::csv_value::CSVValue;

pub const SPLIT_CHAR: char = ',';

pub struct CSV {
  pub header: Vec<Vec<CSVValue>>,
  pub record: Vec<Vec<CSVValue>>,
}

impl CSV {
  pub fn new(s: &str) -> Self {
    unimplemented!()
  }
}