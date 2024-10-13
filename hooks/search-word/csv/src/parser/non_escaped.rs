use std::str::Bytes;

use crate::{csv::SPLIT_CHAR, csv_value::CSVValue};

use super::ParseResult;

// s = ascii
pub fn non_escaped(s: &str) -> ParseResult<CSVValue> {
  non_escaped_impl(s, s.bytes(), 0)
}

fn non_escaped_impl<'a>(s: &'a str, mut bytes: Bytes, index: usize) -> ParseResult<'a, CSVValue> {
  let code = bytes.next();

  if code == Some(SPLIT_CHAR.try_into().unwrap()) || code.map(move |b| b < 0x20) == Some(true) || code == None {
    return (CSVValue::new(&s[0..index]), &s[index..])
  }

  non_escaped_impl(s, bytes, index + 1)
}

#[cfg(test)]
mod tests_non_escaped {
  use crate::{csv_value::CSVValue, parser::non_escaped::non_escaped};

  #[test]
  fn test_non_multibyte_text(){
    let str = "abc123,cdf456";
    assert_eq!(non_escaped(str), (CSVValue::String("abc123".to_string()), ",cdf456"));
  }
}