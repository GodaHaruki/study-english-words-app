use crate::csv_value::CSVValue;

use super::{header::header, ParseResult};

pub fn record(s: &str) -> ParseResult<Vec<CSVValue>> {
  header(s)  
}