use crate::{csv_value::CSVValue, parser::parse};

pub const SPLIT_CHAR: char = ',';

#[derive(Debug, PartialEq)]
pub struct CSV {
  pub header: Vec<CSVValue>,
  pub records: Vec<Vec<CSVValue>>,
}

impl CSV {
  pub fn new(s: &str) -> Self {
    parse(s).0
  }
}