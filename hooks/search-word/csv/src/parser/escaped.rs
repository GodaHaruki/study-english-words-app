use std::str::Chars;

use crate::{csv::SPLIT_CHAR, csv_value::CSVValue};

use super::ParseResult;

pub fn escaped(s: &str) -> ParseResult<CSVValue> {
  escaped_impl(s.chars(), String::new())
}

fn escaped_impl<'a>(mut chars: Chars<'a>, s: String) -> ParseResult<'a, CSVValue> {
  let next = chars.next().unwrap();
  if next == '"' {
    let next = chars.next().unwrap();
    if next == SPLIT_CHAR {
      return (CSVValue::new(s.as_str()), chars.as_str());
    } else if next == '"' {
      return escaped_impl(chars, s + "\"")
    } else {
      panic!("Syntax error: wrong csv")
    }
  }

  escaped_impl(chars, s + next.to_string().as_str())
}

#[cfg(test)]
mod tests_escaped {
  use crate::{csv_value::CSVValue, parser::escaped::escaped};

  #[test]
  fn test_non_multibyte_text(){
    let str = "abc123\"\"456\",\"cdf456\"";
    assert_eq!(escaped(str), (CSVValue::String( "abc123\"456".to_string()), "\"cdf456\""));
  }

  #[test]
  fn test_multibyte_text(){
    let str = "a🙃😉bc😀
    \",😉🙃";
    assert_eq!(escaped(str), (CSVValue::String("a🙃😉bc😀
    ".to_string()), "😉🙃"));
  }
}