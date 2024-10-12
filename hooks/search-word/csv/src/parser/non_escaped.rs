use std::str::Chars;

use crate::{csv::SPLIT_CHAR, csv_value::CSVValue};

use super::ParseResult;

pub fn non_escaped(s: &str) -> ParseResult<CSVValue> {
  non_escaped_impl(s, s.chars(), 0)
}

fn non_escaped_impl<'a>(s: &'a str, mut chars: Chars<'a>, index: usize) -> ParseResult<'a, CSVValue> {
  let str = chars.as_str();

  if chars.next().unwrap() == SPLIT_CHAR {
    return (CSVValue::new(s.chars().take(index).collect::<String>().as_str()), str);
  }

  non_escaped_impl(s, chars, index + 1)
}

#[cfg(test)]
mod tests_non_escaped {
  use crate::{csv_value::CSVValue, parser::non_escaped::non_escaped};

  #[test]
  fn test_non_multibyte_text(){
    let str = "abc123,cdf456";
    assert_eq!(non_escaped(str), (CSVValue::String("abc123".to_string()), ",cdf456"));
  }

  #[test]
  fn test_multibyte_text(){
    let str = "a🙃😉bc😀,😉🙃";
    assert_eq!(non_escaped(str), (CSVValue::String("a🙃😉bc😀".to_string()), ",😉🙃"));
  }
}